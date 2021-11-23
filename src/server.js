const { GraphQLServer } = require ("graphql-yoga");

const typeDefs = `
  type Message {
    user: String!,
    message: String!, 
    id: ID!
  }

  type Query {
      messages: [Message!]
  }
`
const messages = [];
const resolvers = {
  Query: {
    messages: () => messages,
  },
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({port}) => console.log(`Server is running on localhost:${port}`));