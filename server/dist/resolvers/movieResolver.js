"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongodb_1 = require("mongodb");
const movieModel_1 = __importDefault(require("../models/movieModel"));
const resolvers = {
    Query: {
        getMovies: async () => {
            // Fetch movies from your database
            return await movieModel_1.default.find({});
        },
        getMovie: async (_, { id }) => {
            // Convert the string id to an ObjectId
            const objectId = new mongodb_1.ObjectId(id);
            const movie = await movieModel_1.default.findById(objectId);
            // Ensure the nested fields for images are correctly mapped
            if (movie && movie.images) {
                movie.images = {
                    jpg: movie.images.jpg || { image_url: null, small_image_url: null, large_image_url: null },
                    webp: movie.images.webp || { image_url: null, small_image_url: null, large_image_url: null }
                };
            }
            return movie;
        },
    },
};
exports.default = resolvers;
