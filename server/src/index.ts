import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import connectDB from './config/db';
import { Application } from 'express';
import dotenv from 'dotenv';
import { authenticateToken } from './middleware/auth';
import path from 'path';
import cors from 'cors'; // Import cors
import { InMemoryLRUCache } from 'apollo-server-caching'; // Import InMemoryLRUCache

// Load environment variables from .env file
dotenv.config();

const startServer = async () => {
    const app: Application = express();
    
    // Connect to MongoDB
    await connectDB();

    // Enable CORS
    app.use(cors({
        origin: 'https://anivault.onrender.com', // Allow requests from this origin
        credentials: true,
    }));

    // Serve static files from the 'client/dist' directory
    app.use(express.static(path.join(__dirname, '..', '..', 'client', 'dist')));

    // Initialize Apollo Server
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        context: ({ req }) => authenticateToken({ req }),
        cache: 'bounded', // Configure cache to be bounded
        persistedQueries: {
            cache: new InMemoryLRUCache({ maxSize: 1000 }), // Example cache configuration
        },
    });
    await server.start();
    server.applyMiddleware({ app: app as any });

    // Handle root route
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
    });

    // Handle all other routes
    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '..', '..', 'client', 'dist', 'index.html'));
    });

    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};

startServer();


//ci test comment