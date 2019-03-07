import { Friend, storage } from '../../utils';

const Query = {
  getFriend: ({ id }) => {
    if (storage.friends) {
      return new Friend(id, storage.friends[id]);
    } else {
      return null;
    }
  },
  friends: () => {
    if (storage.friends) {
      return Object.keys(storage.friends).map(
        id => new Friend(id, storage.friends[id])
      );
    } else {
      return null;
    }
  },
};

export default Query;
