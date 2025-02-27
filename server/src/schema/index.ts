import { mergeTypeDefs } from '@graphql-tools/merge';
import movieSchema from './movieSchema';
import userSchema from './userSchema';

const typeDefs = mergeTypeDefs([movieSchema, userSchema]);

export default typeDefs;