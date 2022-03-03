import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Todo {
    text: String
  }

  type Query {
    todos: [Todo]
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
    todos: () => {
      return todos
    }
  }
}

const server1 = new ApolloServer({
  typeDefs,
  resolvers,
})

const server2 = new ApolloServer({
  typeDefs,
  resolvers,
  persistedQueries: true,
})

server1.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
