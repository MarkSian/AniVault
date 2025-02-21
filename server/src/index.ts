import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import mongoose from 'mongoose';
import typeDefs from './schema/movieSchema';
import resolvers from './resolvers/movieResolver';
import connectDB  from './config/db';
import { Application } from 'express';

const startServer = async () => {
    const app: Application = express();
    
    // Connect to MongoDB
    await connectDB();

    // Initialize Apollo Server
    const server = new ApolloServer({ typeDefs, resolvers });
    await server.start();
    server.applyMiddleware({ app: app as any });

    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();