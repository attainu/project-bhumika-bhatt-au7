import { User } from "../models";

const userController = {
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
