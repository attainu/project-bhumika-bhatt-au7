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
      const {
        _id,
        firstName,
        lastName,
        userName,
        email,
        country,
        mobile,
      } = user;
      res
        .status(200)
        .send({ _id, firstName, lastName, userName, email, country, mobile });
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  updateUser: async (req, res) => {
    console.log("Profile", req.body);
    try {
      const info = await Profile.updateUser(req.body);
      res.status(200).send("User details updated successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  updateUserPassword: async (req, res) => {
    try {
      const info = await Profile.updateUserPassword(req.body);
      res.status(200).send("User password updated successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  updateUserFollower: async (req, res) => {
    try {
      const info = await Profile.updateUserFollowing(
        req.body.followId,
        req.user._id
      );
      res.status(200).json({ info });
    } catch (error) {
      res.status(400).send(error._message);
    }
  },

  updateUserUnFollower: async (req, res) => {
    try {
      const info = await Profile.updateUserUnFollowing(
        req.body.unfollowId,
        req.user._id
      );
      res.status(200).json({ info });
    } catch (error) {
      res.status(400).send(error._message);
    }
  },
};

export default profileController;
