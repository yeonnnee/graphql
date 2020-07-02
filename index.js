import { GraphQlServer } from 'graphql-yoga';


const server = new GraphQlServer ({
    typeDefs: "graphql/schema.graphql",
    
});

server.start(() => console.log("Graphql Server Running"));