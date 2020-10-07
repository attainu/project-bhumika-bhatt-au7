import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";

import { User } from "../models";
import { comparePassword } from "../utils";

const transporter = nodemailer.createTransport(
  sendgridTransport({
    auth: {
      api_key: process.env.SENDGRID_API,
    },
  })
);

const userController = {
  login: async (req, res) => {
    try {
      const user = await User.login(req.body);
      if (user) {
        if (await comparePassword(req.body.password, user.password)) {
          const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);
          const {
            _id,
            firstName,
            lastName,
            userName,
            country,
            mobile,
            gender,
            image,
          } = user;
          res.status(200).send({
            token,
            _id,
            firstName,
            lastName,
            userName,
            country,
            mobile,
            gender,
            image,
          });
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
      transporter.sendMail({
        to: user.email,
        from: "connectxapp@gmail.com",
        subject: "Successfully SignedUp",
        html: `<h2>Hello <mark>${user.firstName} ${user.lastName}!!</mark> Welcome to ConnectX.</h2>`,
      });
      return res.status(200).json({ message: "User created successfully!" });
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
