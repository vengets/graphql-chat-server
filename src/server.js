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

  type Mutation {
    postMessage( user: String!, message: String!): ID!
  }
`
const messages = [];
const resolvers = {
  
  Query: {
    messages: () => messages,
  },

  Mutation: {
    postMessage: (parent, {user, message}) => {
      const id = messages.length;
      messages.push({
        id,
        user,
        message
      });
      return id;
    },
    
  }
}

const server = new GraphQLServer({ typeDefs, resolvers })
server.start(({port}) => console.log(`Server is running on localhost:${port}`));