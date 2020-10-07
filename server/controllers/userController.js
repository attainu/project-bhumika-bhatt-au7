import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import sendgridTransport from "nodemailer-sendgrid-transport";
import { randomBytes } from "crypto";

import { User } from "../models";
import { comparePassword, hashPassword } from "../utils";

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

  reset: async (req, res) => {
    try {
      randomBytes(32, async (err, buffer) => {
        if (err) {
          console.log(err);
        } else {
          const resetToken = buffer.toString("hex");
          const user = await User.reset(req.body.email);
          if (!user) {
            return res.status(422).json({ error: "user dont exist" });
          }
          user.resetToken = resetToken;
          user.expireToken = Date.now() + 3600000;
          user.save();
          transporter.sendMail({
            to: user.email,
            from: "connectxapp@gmail.com",
            subject: "Reset Password",
            html: `<h3>Hello <mark>${user.firstName} ${user.lastName}!!</mark>. You requested for Password reset</h3>
              <h5>click on this <a href="http://localhost:3000/reset/${resetToken}">link</a> to reset Password</h5>`,
          });
        }
      });
      res.json({
        message: "Please check your registered email to reset the password !",
      });
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },

  newPassword: async (req, res) => {
    try {
      const user = await User.setPassword(req.body.resetToken);
      if (!user || user == null) {
        res
          .status(422)
          .json({ message: "Cannot complete the request, Please try again!" });
      }
      const password = await hashPassword(req.body.password);
      user.password = password;
      user.resetToken = undefined;
      user.expireToken = undefined;
      res.json({ message: "Password changed successfully" });
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
