import { model, Schema } from "mongoose";
const { ObjectId } = Schema.Types;

const userSchema = new Schema(
  {
    firstName: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },

    lastName: {
      type: String,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },

    userName: {
      type: String,
      default: function () {
        return this.email;
      },
      required: true,
      lowercase: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100,
    },

    country: {
      type: String,
      min: 3,
      maxlength: 100,
    },

    mobile: {
      type: String,
      minlength: 10,
      maxlength: 15,
    },

    followers: [{ type: ObjectId, ref: "Users" }],
    following: [{ type: ObjectId, ref: "Users" }],
  },
  { versionKey: false, timestamps: true }
);

export default model("Users", userSchema);
