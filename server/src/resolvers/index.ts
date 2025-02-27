import movieResolvers from './movieResolver';
import userResolvers from './userResolver';

const resolvers = {
  Query: {
    ...movieResolvers.Query,
    ...userResolvers.Query,
  },
  Mutation: {
    ...movieResolvers.Mutation,
    ...userResolvers.Mutation,
  },
};

export default resolvers;