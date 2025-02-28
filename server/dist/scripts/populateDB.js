"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const movieModel_1 = __importDefault(require("../models/movieModel"));
const db_1 = __importDefault(require("../config/db"));
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
const populateDB = async () => {
    try {
        await (0, db_1.default)();
        let page = 1;
        const maxPages = 20; // Set the maximum number of pages to fetch
        while (page <= maxPages) {
            try {
                // Fetch a list of movies from the external API
                const listResponse = await axios_1.default.get(`https://api.jikan.moe/v4/anime?page=${page}`);
                const movieList = listResponse.data.data;
                // Fetch details for each movie and insert into MongoDB
                for (const movie of movieList) {
                    try {
                        const movieResponse = await axios_1.default.get(`https://api.jikan.moe/v4/anime/${movie.mal_id}/full`);
                        const movieData = movieResponse.data.data;
                        // Provide default values for missing fields
                        movieData.background = movieData.background || 'N/A';
                        movieData.season = movieData.season || 'Unknown';
                        movieData.year = movieData.year || 0;
                        await movieModel_1.default.create(movieData);
                        console.log(`Inserted movie with mal_id: ${movie.mal_id}`);
                    }
                    catch (error) {
                        console.error(`Error fetching movie with mal_id: ${movie.mal_id}`, error);
                    }
                    // Add a delay to avoid hitting the rate limit
                    await delay(1000); // 1 second delay
                }
                console.log(`Page ${page} processed successfully`);
                page++;
            }
            catch (error) {
                console.error(`Error fetching page ${page}:`, error);
                break; // Exit the loop if there is an error fetching the page
            }
        }
        console.log('Database populated successfully');
        process.exit(0);
    }
    catch (error) {
        console.error('Error populating database:', error);
        process.exit(1);
    }
};
populateDB();
