import { GraphQlServer } from 'graphql-yoga';
import resolvers from './graphql/resolvers';

const server = new GraphQlServer ({
    typeDefs: "graphql/schema.graphql",
    resolvers: resolvers,
});

server.start(() => console.log("Graphql Server Running"));