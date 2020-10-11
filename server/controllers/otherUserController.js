import { otherUser } from "../models";

const otherUserController = {
  profile: async (req, res) => {
    try {
      const userProfile = await otherUser.profile(req.params.id);
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(400).send(error._message);
    }
  },

  search: async (req, res) => {
    console.log(req.body);
    try {
      const users = await otherUser.search(req.body.query);
      console.log(users);
      res.status(200).json(users);
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
};

export default otherUserController;
