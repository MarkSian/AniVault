import mongoose from 'mongoose';

const titleSchema = new mongoose.Schema({
  type: String,
  title: String,
});

const producerSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const licensorSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const studioSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const genreSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const themeSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const demographicSchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const relationEntrySchema = new mongoose.Schema({
  mal_id: Number,
  type: String,
  name: String,
  url: String,
});

const relationSchema = new mongoose.Schema({
  relation: String,
  entry: [relationEntrySchema],
});

const externalSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const streamingSchema = new mongoose.Schema({
  name: String,
  url: String,
});

const imageSchema = new mongoose.Schema({
  image_url: String,
  small_image_url: String,
  large_image_url: String,
});

const trailerImageSchema = new mongoose.Schema({
  image_url: String,
  small_image_url: String,
  medium_image_url: String,
  large_image_url: String,
  maximum_image_url: String,
});

const trailerSchema = new mongoose.Schema({
  youtube_id: String,
  url: String,
  embed_url: String,
  images: trailerImageSchema,
});

const airedPropSchema = new mongoose.Schema({
  day: Number,
  month: Number,
  year: Number,
});

const airedSchema = new mongoose.Schema({
  from: String,
  to: String,
  prop: airedPropSchema,
  string: String,
});

const broadcastSchema = new mongoose.Schema({
  day: String,
  time: String,
  timezone: String,
  string: String,
});

const themeMusicSchema = new mongoose.Schema({
  openings: [String],
  endings: [String],
});

const movieSchema = new mongoose.Schema({
  titles: [titleSchema],
  title_synonyms: [String],
  producers: [producerSchema],
  licensors: [licensorSchema],
  studios: [studioSchema],
  genres: [genreSchema],
  explicit_genres: [String],
  themes: [themeSchema],
  demographics: [demographicSchema],
  relations: [relationSchema],
  external: [externalSchema],
  streaming: [streamingSchema],
  mal_id: Number,
  url: String,
  images: imageSchema,
  trailer: trailerSchema,
  approved: Boolean,
  title: String,
  title_english: String,
  title_japanese: String,
  type: String,
  source: String,
  episodes: Number,
  status: String,
  airing: Boolean,
  aired: airedSchema,
  duration: String,
  rating: String,
  score: Number,
  scored_by: Number,
  rank: Number,
  popularity: Number,
  members: Number,
  favorites: Number,
  synopsis: String,
  background: String,
  season: String,
  year: Number,
  broadcast: broadcastSchema,
  theme: themeMusicSchema,
});

const Movie = mongoose.model('Movie', movieSchema);

export default Movie;