import { makeExecutableSchema } from 'graphql-tools';
import resolvers from './resolvers';

const typeDefs = `
  type Contact {
    firstName: String
    lastName: String
  }

  enum Gender {
    MALE
    FEMALE
    UNSPECIFIED
  }

  type Friend {
    id: ID 
    firstName: String 
    lastName: String
    gender: Gender 
    age: Int
    language: String 
    email: String
    contacts: [Contact]
    hobbies: [String]
  }
  
  type Alien {
    id: ID
    firstName: String
    lastName: String
    planet: String
  }

  type Query { 
    getFriend(id: ID!): Friend
    getFriends: [Friend]
    getAliens: [Alien]
  }

  input ContactInput {
    firstName: String
    lastName: String
  }

  input FriendInput{
    id: ID 
    firstName: String! 
    lastName: String
    gender: Gender 
    age: Int
    language: String 
    email: String
    hobbies: [String]
    contacts: [ContactInput]
  }

  type Mutation{
    createFriend(input: FriendInput): Friend
    updateFriend(input: FriendInput): Friend
    deleteFriend(id: ID!): String
  }
`;

export default makeExecutableSchema({ typeDefs, resolvers });
