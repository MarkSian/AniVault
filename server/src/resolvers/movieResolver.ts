import { ObjectId } from 'mongodb';
import Movie from "../models/movieModel";

const resolvers = {
  Query: {
    getMovies: async () => {
      // Fetch movies from your database
      const movies = await Movie.find({});
      // Filter out movies with trailers that do not have a URL
      return movies.filter((movie: { trailer: { url: any; }; }) => movie.trailer && movie.trailer.url);
    },
    getMovie: async (_: any, { id }: { id: string }) => {
      // Convert the string id to an ObjectId
      const objectId = new ObjectId(id);
      const movie = await Movie.findById(objectId);

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
  Mutation: {
    addMovie: async (_: any, args: any) => {
      const movie = new Movie(args);
      return await movie.save();
    },
    updateMovie: async (_: any, { id, ...args }: { id: string }) => {
      const objectId = new ObjectId(id);
      return await Movie.findByIdAndUpdate(objectId, args, { new: true });
    },
    deleteMovie: async (_: any, { id }: { id: string }) => {
      const objectId = new ObjectId(id);
      return await Movie.findByIdAndDelete(objectId);
    },
  },
};

export default resolvers;
