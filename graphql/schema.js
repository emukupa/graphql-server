import { buildSchema } from 'graphql';
// String, Float, Int, Boolean
const schema = buildSchema(`
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

  type Query { 
    getFriend(id: ID): Friend
    friends: Friend
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
  }
`);

export default schema;
