"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const titleSchema = new mongoose_1.default.Schema({
    type: String,
    title: String,
});
const producerSchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const licensorSchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const studioSchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const genreSchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const themeSchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const demographicSchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const relationEntrySchema = new mongoose_1.default.Schema({
    mal_id: Number,
    type: String,
    name: String,
    url: String,
});
const relationSchema = new mongoose_1.default.Schema({
    relation: String,
    entry: [relationEntrySchema],
});
const externalSchema = new mongoose_1.default.Schema({
    name: String,
    url: String,
});
const streamingSchema = new mongoose_1.default.Schema({
    name: String,
    url: String,
});
const imageSchema = new mongoose_1.default.Schema({
    image_url: String,
    small_image_url: String,
    large_image_url: String,
});
const trailerImageSchema = new mongoose_1.default.Schema({
    image_url: String,
    small_image_url: String,
    medium_image_url: String,
    large_image_url: String,
    maximum_image_url: String,
});
const trailerSchema = new mongoose_1.default.Schema({
    youtube_id: String,
    url: String,
    embed_url: String,
    images: trailerImageSchema,
});
const airedPropSchema = new mongoose_1.default.Schema({
    day: Number,
    month: Number,
    year: Number,
});
const airedSchema = new mongoose_1.default.Schema({
    from: String,
    to: String,
    prop: airedPropSchema,
    string: String,
});
const broadcastSchema = new mongoose_1.default.Schema({
    day: String,
    time: String,
    timezone: String,
    string: String,
});
const themeMusicSchema = new mongoose_1.default.Schema({
    openings: [String],
    endings: [String],
});
const movieSchema = new mongoose_1.default.Schema({
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
const Movie = mongoose_1.default.model('Movie', movieSchema);
exports.default = Movie;
