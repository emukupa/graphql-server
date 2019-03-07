import { Friend, storage } from '../../utils';

const storeFriend = (id, input) => {
  storage.friends[id] = input;
};

const createFriendsAndStoreFriend = (id, input) => {
  storage.friends = {};
  storage.friends[id] = input;
};
const Mutation = {
  createFriend: ({ input }) => {
    let id = require('crypto')
      .randomBytes(10)
      .toString('hex');

    if (storage.friends) {
      storeFriend(id, input);
    } else {
      createFriendsAndStoreFriend(id, input);
    }

    return new Friend(id, input);
  },
};

export default Mutation;
