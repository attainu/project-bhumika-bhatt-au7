import jwt from "jsonwebtoken";

import { User } from "../models";
import { comparePassword } from "../utils";

const userController = {
  login: async (req, res) => {
    try {
      const user = await User.login(req.body);
      if (user) {
        if (await comparePassword(req.body.password, user.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
          const { _id, firstName, lastName, email } = user;
          res.status(200).send({ token, firstName, lastName, email, _id });
        } else {
          res.status(400).send("Password did not match!");
        }
      } else {
        res.status(404).send("User not found! Please signup first...");
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  signup: async (req, res) => {
    try {
      const user = await User.signup(req.body);
      res.status(200).send("User created successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
