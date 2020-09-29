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
          const { _id, firstName } = user;
          res.status(200).send({ token, firstName, _id });
        } else {
          res.status(400).send("Incorrect password!");
        }
      } else {
        res.status(404).send("User not found! Create new account");
      }
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },

  signup: async (req, res) => {
    try {
      const user = await User.signup(req.body);
      return res.status(200).json({ message: "user created successfully!" });
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
