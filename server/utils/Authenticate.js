import { userSchema } from "../schemas";

import jwt from "jsonwebtoken";

const Auth = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization) {
    return res.status(401).json({ err: "You must be logged in to view page" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, process.env.SECRET_KEY, (err, info) => {
    if (err) {
      return res.status(401).json({ error: "You must login first!!!" });
    }
    const { _id } = info;
    userSchema.find({ _id }).then((data) => {
      req.user = data;
      console.log(req.user);
      next();
    });
  });
};
export default Auth;
