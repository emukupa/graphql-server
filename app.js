import express from 'express';
import graphqlHTTP from 'express-graphql';
import rest from './rest';
import schema from './graphql/schema';

const app = express();

// run the rest routes
rest(app);

// in memory database
class Friend {
  constructor(id, { firstname, lastname, gender, language, email, hobbies }) {
    this.id = id;
    this.firstname = firstname;
    this.lastname = lastname;
    this.gender = gender;
    this.language = language;
    this.email = email;
    this.hobbies = hobbies;
  }
}

const firendDatabase = {};

// bring in the graphql schema
const resolvers = {
  friend: () => {
    return {
      id: 1234,
      firstname: 'Edward',
      lastname: 'Manda',
      gender: 'male',
      language: 'english',
      email: 'edward@email.com',
      hobbies: [
        { hobby: 'soccer' },
        { hobby: 'footbal' },
        { hobby: 'basketbal' },
      ],
    };
  },
  createFriend: ({ input }) => {
    let id = require('crypto')
      .randomBytes(10)
      .toString('hex');
    firendDatabase[id] = input;
    return new Friend(id, input);
  },
};

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
export default app;
