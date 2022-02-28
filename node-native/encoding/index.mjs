import { graphql } from 'graphql'
import { makeExecutableSchema } from '@graphql-tools/schema'

const typeDef = `
  type Query {
    hello: String
  }
`

const resolvers = {
  Query: {
    hello () {
      return 'hello, shanyue'
    }
  }
}

const query = '{ hello }'

graphql({
  schema,
  source: query,
  rootValue: root
}).then((result) => {
  console.log(result)
})
