import { Profile } from "../models";

const profileController = {
  getUser: async (req, res) => {
    try {
      const user = await Profile.getUser(req.params.userName);
      res.status(200).send(user);
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  updateUser: async (req, res) => {
    try {
      const info = await Profile.updateUser(req.body);
      res.status(200).send("user details updated successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  updateUserPassword: async (req, res) => {
    try {
      const info = await Profile.updateUserPassword(req.body);
      res.status(200).send("user password updated successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },
};

export default profileController;
