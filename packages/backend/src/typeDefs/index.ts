import mutation from './mutation'
import query from './query'
import user from './user'

import { DocumentNode } from 'graphql'

export default [user, query, mutation] as DocumentNode[]
