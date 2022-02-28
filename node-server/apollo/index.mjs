import { ApolloServer, gql } from 'apollo-server'

const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: '三国演义',
    author: '施耐庵',
  },
  {
    title: '西游记',
    author: '罗贯中',
  },
]

const resolvers = {
  Query: {
    books: () => {
      return books
    }
  }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
})
