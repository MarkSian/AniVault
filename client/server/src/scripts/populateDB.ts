import axios from 'axios';
import mongoose from 'mongoose';
import Movie from '../models/movieModel';
import connectDB from '../config/db';

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

const populateDB = async () => {
  try {
    await connectDB();

    // Fetch a list of movies from the external API
    const listResponse = await axios.get<{ data: { mal_id: number }[] }>('https://api.jikan.moe/v4/anime');
    const movieList = listResponse.data.data;

    // Fetch details for each movie and insert into MongoDB
    for (const movie of movieList) {
      try {
        const movieResponse = await axios.get<{ data: any }>(`https://api.jikan.moe/v4/anime/${movie.mal_id}/full`);
        const movieData = movieResponse.data.data;

        // Provide default values for missing fields
        movieData.background = movieData.background || 'N/A';
        movieData.season = movieData.season || 'Unknown';
        movieData.year = movieData.year || 0;

        await Movie.create(movieData);
        console.log(`Inserted movie with mal_id: ${movie.mal_id}`);
      } catch (error) {
        console.error(`Error fetching movie with mal_id: ${movie.mal_id}`, error);
      }

      // Add a delay to avoid hitting the rate limit
      await delay(1000); // 1 second delay
    }

    console.log('Database populated successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error populating database:', error);
    process.exit(1);
  }
};

populateDB();