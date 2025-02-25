"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const movieSchema = new mongoose_1.default.Schema({
    mal_id: { type: Number, required: true },
    url: { type: String, required: true },
    images: { type: Object, required: true },
    trailer: { type: Object, required: true },
    approved: { type: Boolean, required: true },
    titles: { type: Array, required: true },
    title: { type: String, required: true },
    title_english: { type: String, required: true },
    title_japanese: { type: String, required: true },
    title_synonyms: { type: Array, required: true },
    type: { type: String, required: true },
    source: { type: String, required: true },
    episodes: { type: Number, required: true },
    status: { type: String, required: true },
    airing: { type: Boolean, required: true },
    aired: { type: Object, required: true },
    duration: { type: String, required: true },
    rating: { type: String, required: true },
    score: { type: Number, required: true },
    scored_by: { type: Number, required: true },
    rank: { type: Number, required: true },
    popularity: { type: Number, required: true },
    members: { type: Number, required: true },
    favorites: { type: Number, required: true },
    synopsis: { type: String, required: true },
    background: { type: String, required: false },
    season: { type: String, required: false },
    year: { type: Number, required: false },
    broadcast: { type: Object, required: true },
    producers: { type: Array, required: true },
    licensors: { type: Array, required: true },
    studios: { type: Array, required: true },
    genres: { type: Array, required: true },
    explicit_genres: { type: Array, required: true },
    themes: { type: Array, required: true },
    demographics: { type: Array, required: true },
    relations: { type: Array, required: true },
    theme: { type: Object, required: true },
    external: { type: Array, required: true },
    streaming: { type: Array, required: true },
});
const Movie = mongoose_1.default.model('Movie', movieSchema);
exports.default = Movie;
