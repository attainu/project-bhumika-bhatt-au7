import { model, Schema, set } from "mongoose";
const { ObjectId } = Schema.Types;

const PostSchema = new Schema(
  {
    title: {
      type: String,
      // required: true,
    },
    description: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      // required: true,
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
