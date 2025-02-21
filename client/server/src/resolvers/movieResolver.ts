const resolvers = {
  Query: {
    getMovies: async () => {
      // Fetch movies from your database
      return [
        { id: '1', title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Sci-Fi' },
        { id: '2', title: 'Interstellar', director: 'Christopher Nolan', releaseYear: 2014, genre: 'Sci-Fi' },
      ];
    },
    getMovie: async (_: any, { id }: { id: string }) => {
      // Fetch a single movie by ID from your database
      return { id, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Sci-Fi' };
    },
  },
  Mutation: {
    addMovie: async (_: any, { title, director, releaseYear, genre }: { title: string, director: string, releaseYear: number, genre: string }) => {
      // Add a new movie to your database
      return { id: '3', title, director, releaseYear, genre };
    },
    updateMovie: async (_: any, { id, title, director, releaseYear, genre }: { id: string, title?: string, director?: string, releaseYear?: number, genre?: string }) => {
      // Update an existing movie in your database
      return { id, title: title || 'Inception', director: director || 'Christopher Nolan', releaseYear: releaseYear || 2010, genre: genre || 'Sci-Fi' };
    },
    deleteMovie: async (_: any, { id }: { id: string }) => {
      // Delete a movie from your database
      return { id, title: 'Inception', director: 'Christopher Nolan', releaseYear: 2010, genre: 'Sci-Fi' };
    },
  },
};

export default resolvers;