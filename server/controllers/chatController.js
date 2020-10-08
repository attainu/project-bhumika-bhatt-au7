import { Chat } from "../models";

const chatController = {
  create: async (data) => {
    try {
      const chat = await Chat.create(data);
      return { message: "Chat created successfully!" };
    } catch (error) {
      console.dir(error);
    }
  },

  delete: async (req, res) => {
    try {
      const chat = await Chat.delete(req.body);
      return res.status(200).json({ message: "Chat deleted successfully!" });
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },

  get: async (req, res) => {
    try {
      const chat = await Chat.get(req.params);
      return res.status(200).json(chat);
    } catch (error) {
      console.dir(error);
      res.status(400).send(error._message);
    }
  },
};

export default chatController;
