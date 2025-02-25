"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_express_1 = require("apollo-server-express");
const movieSchema = (0, apollo_server_express_1.gql) `
  type Title {
    type: String!
    title: String!
  }

  type Producer {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type Licensor {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type Studio {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type Genre {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type Theme {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type Demographic {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type RelationEntry {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  type Relation {
    relation: String!
    entry: [RelationEntry!]!
  }

  type External {
    name: String!
    url: String!
  }

  type Streaming {
    name: String!
    url: String!
  }

  type ImageUrls {
    image_url: String
    small_image_url: String
    large_image_url: String
  }

  type Image {
    jpg: ImageUrls
    webp: ImageUrls
  }

  type TrailerImage {
    image_url: String!
    small_image_url: String!
    medium_image_url: String!
    large_image_url: String!
    maximum_image_url: String!
  }

  type Trailer {
    youtube_id: String!
    url: String!
    embed_url: String!
    images: TrailerImage!
  }

  type AiredProp {
    day: Int
    month: Int
    year: Int
  }

  type Aired {
    from: String!
    to: String
    prop: AiredProp!
    string: String!
  }

  type Broadcast {
    day: String
    time: String
    timezone: String
    string: String
  }

  type ThemeMusic {
    openings: [String!]!
    endings: [String!]!
  }

  type Movie {
    id: ID!
    titles: [Title!]!
    title_synonyms: [String!]!
    producers: [Producer!]!
    licensors: [Licensor!]!
    studios: [Studio!]!
    genres: [Genre!]!
    explicit_genres: [String!]!
    themes: [Theme!]!
    demographics: [Demographic!]!
    relations: [Relation!]!
    external: [External!]!
    streaming: [Streaming!]!
    mal_id: Int!
    url: String!
    images: Image
    trailer: Trailer
    approved: Boolean!
    title: String!
    title_english: String
    title_japanese: String
    type: String!
    source: String!
    episodes: Int
    status: String!
    airing: Boolean!
    aired: Aired!
    duration: String!
    rating: String!
    score: Float!
    scored_by: Int!
    rank: Int!
    popularity: Int!
    members: Int!
    favorites: Int!
    synopsis: String!
    background: String
    season: String
    year: Int
    broadcast: Broadcast
    theme: ThemeMusic
  }

  type Query {
    getMovies: [Movie]
    getMovie(id: ID!): Movie
  }

  type Mutation {
    addMovie(
      titles: [TitleInput!]!,
      title_synonyms: [String!]!,
      producers: [ProducerInput!]!,
      licensors: [LicensorInput!]!,
      studios: [StudioInput!]!,
      genres: [GenreInput!]!,
      explicit_genres: [String!]!,
      themes: [ThemeInput!]!,
      demographics: [DemographicInput!]!,
      relations: [RelationInput!]!,
      external: [ExternalInput!]!,
      streaming: [StreamingInput!]!,
      mal_id: Int!,
      url: String!,
      images: ImageInput!,
      trailer: TrailerInput!,
      approved: Boolean!,
      title: String!,
      title_english: String,
      title_japanese: String,
      type: String!,
      source: String!,
      episodes: Int,
      status: String!,
      airing: Boolean!,
      aired: AiredInput!,
      duration: String!,
      rating: String!,
      score: Float!,
      scored_by: Int!,
      rank: Int!,
      popularity: Int!,
      members: Int!,
      favorites: Int!,
      synopsis: String!,
      background: String,
      season: String,
      year: Int,
      broadcast: BroadcastInput,
      theme: ThemeMusicInput
    ): Movie
    updateMovie(
      id: ID!,
      titles: [TitleInput],
      title_synonyms: [String],
      producers: [ProducerInput],
      licensors: [LicensorInput],
      studios: [StudioInput],
      genres: [GenreInput],
      explicit_genres: [String],
      themes: [ThemeInput],
      demographics: [DemographicInput],
      relations: [RelationInput],
      external: [ExternalInput],
      streaming: [StreamingInput],
      mal_id: Int,
      url: String,
      images: ImageInput,
      trailer: TrailerInput,
      approved: Boolean,
      title: String,
      title_english: String,
      title_japanese: String,
      type: String,
      source: String,
      episodes: Int,
      status: String,
      airing: Boolean,
      aired: AiredInput,
      duration: String,
      rating: String,
      score: Float,
      scored_by: Int,
      rank: Int,
      popularity: Int,
      members: Int,
      favorites: Int,
      synopsis: String,
      background: String,
      season: String,
      year: Int,
      broadcast: BroadcastInput,
      theme: ThemeMusicInput
    ): Movie
    deleteMovie(id: ID!): Movie
  }

  input TitleInput {
    type: String!
    title: String!
  }

  input ProducerInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input LicensorInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input StudioInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input GenreInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input ThemeInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input DemographicInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input RelationEntryInput {
    mal_id: Int!
    type: String!
    name: String!
    url: String!
  }

  input RelationInput {
    relation: String!
    entry: [RelationEntryInput!]!
  }

  input ExternalInput {
    name: String!
    url: String!
  }

  input StreamingInput {
    name: String!
    url: String!
  }

  input ImageUrlsInput {
    image_url: String
    small_image_url: String
    large_image_url: String
  }

  input ImageInput {
    jpg: ImageUrlsInput
    webp: ImageUrlsInput
  }

  input TrailerImageInput {
    image_url: String!
    small_image_url: String!
    medium_image_url: String!
    large_image_url: String!
    maximum_image_url: String!
  }

  input TrailerInput {
    youtube_id: String!
    url: String!
    embed_url: String!
    images: TrailerImageInput!
  }

  input AiredPropInput {
    day: Int
    month: Int
    year: Int
  }

  input AiredInput {
    from: String!
    to: String
    prop: AiredPropInput!
    string: String!
  }

  input BroadcastInput {
    day: String
    time: String
    timezone: String
    string: String
  }

  input ThemeMusicInput {
    openings: [String!]!
    endings: [String!]!
  }
`;
exports.default = movieSchema;
