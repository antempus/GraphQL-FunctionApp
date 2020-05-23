import { ApolloServer } from "apollo-server-azure-functions";
import resolvers from "./resolvers";
import typeDefs from "./typeDefs";

const handler = new ApolloServer({ typeDefs, resolvers }).createHandler();

export default handler;
