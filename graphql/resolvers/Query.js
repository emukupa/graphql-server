//import { Friend, storage } from '../../in_memory_data';
import { Friend, Alien } from '../../models/db_connections';

const Query = {
  getFriend: async (root, { id }) => {
    const friend = await Friend.findById(id);
    return friend;
  },
  getFriends: async () => {
    const friends = await Friend.find();
    return friends;
  },
  getAliens: async () => {
    const aliens = await Alien.findAll();
    return aliens;
  },
};

export default Query;
