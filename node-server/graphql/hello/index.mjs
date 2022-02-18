import { graphql, GraphQLSchema, GraphQLObjectType, GraphQLString } from 'graphql'


// `graphql.js` 可以视作由两大部分组成

// 1. `query`，可以视作 rest 中的 API，它可以与客户端相结合，提供查询语句
// 1. `schema`，可以视作 rest 中对应 API 的逻辑层，它可以与服务端相结合，根据查询语句提供结果

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
      hello: {
        type: GraphQLString,
        resolve() {
          return 'hello, shanyue'
        }
      }
    }
  })
})

const query = '{ hello }'

graphql({
  schema,
  source: query
}).then(result => {
  // { hello: "hello, shanyue" }
  console.log(result)
})
