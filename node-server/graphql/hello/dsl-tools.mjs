import { graphql, buildSchema } from 'graphql'
import { addResolversToSchema, makeExecutableSchema } from '@graphql-tools/schema'

const typeDefs = `
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


// 以下两个表达式可使用 makeExecutableSchema 进行替代
// const schema = makeExecutableSchema({ typeDefs, resolvers })
const _schema = buildSchema(typeDefs)
const schema = addResolversToSchema({
  schema: _schema,
  resolvers
})


const query = '{ hello }'

graphql({
  schema,
  source: query,
}).then((result) => {
  console.log(result)
})
