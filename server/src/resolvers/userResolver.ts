import User from '../models/userModel';
import { signToken } from '../middleware/auth';
import bcrypt from 'bcryptjs';
import { AuthenticationError } from 'apollo-server-express';

const userResolvers = {
  Query: {
    me: async (_: any, __: any, { req }: any) => {
      if (!req.user) {
        throw new AuthenticationError('You are not authenticated');
      }
      return await User.findById(req.user._id);
    },
  },
  Mutation: {
    login: async (_: any, { username, password }: { username: string, password: string }) => {
      const user = await User.findOne({ username });
      if (!user) {
        console.log('User not found');
        throw new AuthenticationError('Invalid credentials');
      }

      console.log('Stored hashed password:', user.password);
      console.log('Provided password:', password);

      const valid = await bcrypt.compare(password, user.password);
      console.log('Password comparison result:', valid);
      if (!valid) {
        console.log('Password does not match');
        throw new AuthenticationError('Invalid credentials');
      }

      const token = signToken(user.username, user.email, user._id);
      return { ...user.toObject(), token };
    },
    signup: async (_: any, { username, email, password }: { username: string, email: string, password: string }) => {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        throw new AuthenticationError('Email already in use');
      }

      // Remove password hashing from here
      const user = new User({ username, email, password });
      await user.save();

      const token = signToken(user.username, user.email, user._id);
      return { ...user.toObject(), token };
    },
  },
};

export default userResolvers;