import { model, Schema } from "mongoose";

const ChatSchema = new Schema(
  {
    room: {
      type: String,
      required: true,
    },

    user: {
      type: String,
    },

    message: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Chat", ChatSchema);
