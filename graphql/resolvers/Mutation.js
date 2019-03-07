//import { Friend, storage } from '../../in_memory_data';
import { Friend } from '../../models/db_connections';

const Mutation = {
  createFriend: async (root, { input }) => {
    try {
      const newFriend = await new Friend({ ...input });
      const savedFriend = await newFriend.save();

      savedFriend.id = newFriend._id;
      return savedFriend;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  updateFriend: async (root, { input }) => {
    try {
      const updatedFriend = await Friend.findByIdAndUpdate(
        { _id: input.id },
        input,
        { new: true }
      );

      return updatedFriend;
    } catch (e) {
      console.log(e);
      return null;
    }
  },
  deleteFriend: async (root, { id }) => {
    try {
      const result = await Friend.deleteOne({ _id: id });
      console.log(result);
      return 'Succefully deleted a friend';
    } catch (e) {
      console.log(e);
      return null;
    }
  },
};

export default Mutation;
