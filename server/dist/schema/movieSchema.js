"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const movieSchema = (0, apollo_server_express_1.gql) `
  type Movie {
    id: ID!
    title: String!
    director: String!
    releaseYear: Int!
    genre: String!
  }

  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
  }

  type Mutation {
    addMovie(title: String!, director: String!, releaseYear: Int!, genre: String!): Movie
    updateMovie(id: ID!, title: String, director: String, releaseYear: Int, genre: String): Movie
    deleteMovie(id: ID!): Movie
  }
`;
exports.default = movieSchema;
