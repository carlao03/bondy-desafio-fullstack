import { GraphQLResolveInfo } from 'graphql'
import { mutationTest } from './mutationTest'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User } from '../../../models/User'
import dotenv from 'dotenv'
dotenv.config({ path: '.env.local' })

const JWT_SECRET: string = process.env.JWT_SECRET || 'secret_dev'

const login = async (
  _parent: any,
  args: { email: string; password: string },
  _context: any,
  _info: GraphQLResolveInfo
) => {
  const { email, password } = args
  const user = await User.findOne({ email })
  if (!user) throw new Error('Usuário não encontrado')
  const valid = await bcrypt.compare(password, user.password)
  if (!valid) throw new Error('Senha inválida')

  const token = jwt.sign(
    { sub: user._id, email: user.email },
    JWT_SECRET as jwt.Secret,
    { expiresIn: process.env.JWT_EXPIRES_IN || '7d' } as jwt.SignOptions
  )

  return {
    _id: user._id,
    name: user.name,
    email: user.email,
    company: user.company,
    password: user.password,
    token,
  } as any
}

export default {
  mutationTest: (
    parent: any,
    args: any,
    context: any,
    info: GraphQLResolveInfo
  ) => mutationTest(parent, args, context, info),
  login,
}
