import { ApolloServer, gql } from 'apollo-server'
import { ApolloServerPluginCacheControl } from 'apollo-server-core'
import responseCachePlugin from 'apollo-server-plugin-response-cache'

// 1. 当使用了 APQ 时，可通过 CacheControl 指令配置 HTTP Cache-Control Header
// 2. 不管使用 ApolloServerPluginCacheControl 还是 responseCachePlugin，均是整体进行缓存
// 3. 按字段缓存，需自己实现

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
    todos (root, args, context, info) {
      // 根据 info.cacheControl 可获取得到关于其 cacheControl 的配置
      console.log(info.cacheControl)
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
    responseCachePlugin.default()
  ],
})

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
