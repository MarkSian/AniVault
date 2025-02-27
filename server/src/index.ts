import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import connectDB from './config/db';
import { Application } from 'express';
import dotenv from 'dotenv';
import { authenticateToken } from './middleware/auth';

// Load environment variables from .env file
dotenv.config();

const startServer = async () => {
    const app: Application = express();
    
    // Connect to MongoDB
    await connectDB();

    // Initialize Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => authenticateToken({ req }),
    });
    await server.start();
    server.applyMiddleware({ app: app as any });

    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();