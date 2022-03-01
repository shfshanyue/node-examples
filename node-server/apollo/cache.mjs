import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginCacheControl } from 'apollo-server-core'

// 1. 当使用了 APQ 与 

const typeDefs = gql`
  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION

  type Todo {
    text: String
  }

  type Query {
    todos: [Todo] @cacheControl(maxAge: 3600000)
    hello: String
  }
`

const todos = [
  {
    text: '学习 GraphQL',
  },
  {
    text: '学习 Typescript',
  },
]

const resolvers = {
  Query: {
    todos () {
      return todos
    },
    hello () {
      return 'hello, shanyue'
    }
  }
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    ApolloServerPluginCacheControl({
      defaultMaxAge: 1000,
      calculateHttpHeaders: true
    }),
  ],
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
