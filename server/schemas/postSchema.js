import { model, Schema, set } from "mongoose";
const { ObjectId } = Schema.Types;

const PostSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },

    file: {
      type: String,
    },

    likes: [{ type: ObjectId, isLiked: Boolean, ref: "Users" }],

    comments: [{ text: String, postedBy: { type: ObjectId, ref: "Users" } }],

    postedBy: {
      type: ObjectId,
      ref: "Users",
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Post", PostSchema);
