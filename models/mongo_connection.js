import mongoose from 'mongoose';

const MONGO_URL = process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/friends';

// Mongo Connection
try {
  mongoose.connect(MONGO_URL, {
    autoReconnect: true,
    reconnectTries: 1000000,
    reconnectInterval: 3000,
    useNewUrlParser: true,
    useCreateIndex: true,
  });
  console.log('\n\u2705  Mongo Database connection successful\n');
} catch (e) {
  console.log(`\u274C  There was a database connectionr error: ${e}\n`);
}
