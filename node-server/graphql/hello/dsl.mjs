import { graphql, buildSchema } from 'graphql'

const schema = buildSchema(`
  type Query {
    hello: String
  }
`)

const root = {
  hello (...args) {
    return 'hello, shanyue'
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
