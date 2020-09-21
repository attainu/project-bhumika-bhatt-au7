import { User } from "../models";

const userController = {
  signup: async (req, res) => {
    try {
      const user = await User.signup(req.body);
      res.status(200).send("user created successfully!");
    } catch (error) {
      console.log(error);
      res.status(400).send(error._message);
    }
  },
};

export default userController;
