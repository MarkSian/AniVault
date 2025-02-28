import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from './schema';
import resolvers from './resolvers';
import connectDB from './config/db';
import { authenticateToken } from './middleware/auth';
import path from 'path';
import type { Request, Response } from 'express';
import { fileURLToPath } from 'node:url';
import { expressMiddleware } from '@apollo/server/express4';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = new ApolloServer({
    typeDefs,
    resolvers,
  });
  
  const startApolloServer = async () => {
    await server.start();
    await connectDB();
  
    const PORT = process.env.PORT || 3001;
    const app = express();
  
    app.use(express.urlencoded({ extended: false }));
    app.use(express.json());
  
    app.use('/graphql', expressMiddleware(server as any,
      {
        context: authenticateToken as any
      }
    ));
  
    if (process.env.NODE_ENV === 'production') {
      app.use(express.static(path.join(__dirname, '../../client/dist')));
      app.get('*', (_req: Request, res: Response) => {
         res.sendFile(path.join(__dirname, '../../client/dist/index.html'));
        });
    }
    app.listen(PORT, () => {
      console.log(`API server running on port ${PORT}!`);
      console.log(`Use GraphQL at http://localhost:${PORT}/graphql`);
    });
  };
  
  startApolloServer();
  
  
  