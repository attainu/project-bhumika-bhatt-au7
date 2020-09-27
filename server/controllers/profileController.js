import { Profile } from "../models";

const profileController = {
  getUser: async (req, res) => {
    try {
      const user = await Profile.getUser(req.params.userName);
      const { firstName, lastName, userName } = user;
      res.status(200).send({ firstName, lastName, userName });
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  getUserProfile: async (req, res) => {
    try {
      const user = await Profile.getUserProfile(req.params.id);
      const { firstName, lastName, userName, email, country, mboile } = user;
      res
        .status(200)
        .send({ firstName, lastName, userName, email, country, mboile });
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
