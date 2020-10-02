import { otherUser } from "../models";

const otherUserController = {
  profile: async (req, res) => {
    try {
      const userProfile = await otherUser.profile(req.params.id);
      console.log(userProfile);
      res.status(200).json(userProfile);
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
};

export default otherUserController;
