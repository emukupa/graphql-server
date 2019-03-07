import mongoose from 'mongoose';
import './mongo_connection';

const friendSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    gender: {
      type: String,
    },
    age: {
      type: Number,
    },
    language: {
      type: String,
    },
    email: {
      type: String,
    },
    contacts: {
      type: Array,
    },
    hobbies: {
      type: Array,
    },
  },
  { timestamps: true }
);

const Friend = mongoose.model('Friend', friendSchema);

export default Friend;
