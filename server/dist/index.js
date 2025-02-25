"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const movieSchema_1 = __importDefault(require("./schema/movieSchema"));
const movieResolver_1 = __importDefault(require("./resolvers/movieResolver"));
const db_1 = __importDefault(require("./config/db"));
const startServer = async () => {
    const app = (0, express_1.default)();
    // Connect to MongoDB
    await (0, db_1.default)();
    // Initialize Apollo Server
    const server = new apollo_server_express_1.ApolloServer({ typeDefs: movieSchema_1.default, resolvers: movieResolver_1.default });
    await server.start();
    server.applyMiddleware({ app: app });
    // Start the server
    const PORT = process.env.PORT || 4000;
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}${server.graphqlPath}`);
    });
};
startServer();
