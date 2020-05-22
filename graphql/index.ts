import { ApolloServer, gql } from 'apollo-server-azure-functions'
import { CosmosClient } from "@azure/cosmos";
const client = new CosmosClient(process.env.CosmosKey);

async function getUser(_, { userId }: { userId: Number }) {
    return client.database('database').container('users').items.query({
        query: "SELECT * FROM c WHERE c.id = @userId",
        parameters: [
            {
                name: "@userId",
                value: userId
            }
        ]
    }).fetchAll().then()
}
const typeDefs = gql`
  type Query {
    getUser(userId: Number): String
  }

  type Mutation {
      addUser: User
      addUsers: [User]
  }

  type Name {
    first: String
    last: String
  }

  type Location {
      state: String
      city: String
      zipcode: String
  }

  type User {
      id: number
      timezone: String
      name: Name
      location: Location
  }
`;

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        getUser
    },
    Mutation: {
        addUser,
        addUsers
    }
};


const handler = new ApolloServer({ typeDefs, resolvers }).createHandler()

export default handler