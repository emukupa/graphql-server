import express from 'express';
import graphqlHTTP from 'express-graphql';
import rest from './rest';
import schema from './graphql/schema';
import resolvers from './graphql/resolvers';

const app = express();

// run the rest routes
rest(app);

// in memory database

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true,
  })
);
export default app;
