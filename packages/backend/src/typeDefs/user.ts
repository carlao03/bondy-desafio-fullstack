import gql from 'graphql-tag'

import { DocumentNode } from 'graphql'

const userTypeDef: DocumentNode = gql`
  type User {
    _id: ID!
    name: String!
    email: String!
    company: String
    password: String!
    token: String
  }
`

export default userTypeDef
