"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const schema_1 = __importDefault(require("./schema"));
const resolvers_1 = __importDefault(require("./resolvers"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const auth_1 = require("./middleware/auth");
// Load environment variables from .env file
dotenv_1.default.config();
const startServer = async () => {
    const app = (0, express_1.default)();
    // Connect to MongoDB
    await (0, db_1.default)();
    // Initialize Apollo Server
    const server = new apollo_server_express_1.ApolloServer({
        typeDefs: schema_1.default,
        resolvers: resolvers_1.default,
        context: ({ req }) => (0, auth_1.authenticateToken)({ req }),
    });
    await server.start();
    server.applyMiddleware({ app: app });
    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};
startServer();
