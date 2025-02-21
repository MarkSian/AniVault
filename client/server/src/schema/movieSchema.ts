import { gql } from 'apollo-server-express';

const movieSchema = gql`
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

export default movieSchema;