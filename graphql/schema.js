import { buildSchema } from 'graphql';

const schema = buildSchema(`
  type Hobby {
    hobby : String
  }

  type Friend {
    id: ID 
    firstname: String 
    lastname: String
    gender: String 
    language: String 
    email: String
    hobbies: [Hobby]
  }

  type Query { 
    friend: Friend
  }

  input FriendInput{
    id: ID 
    firstname: String! 
    lastname: String
    gender: String 
    language: String 
    email: String
  }

  type Mutation{
    createFriend(input: FriendInput): Friend
  }
`);

export default schema;
