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
      default: "",
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
      maxlength: 100,
      default: "",
    },

    mobile: {
      type: String,
      maxlength: 15,
      default: "",
    },
    resetToken: String,
    expireToken: Date,
    isVerified: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
      default: function () {
        return this.gender === "female"
          ? "https://res.cloudinary.com/connectx/image/upload/v1601755269/Default%20Avatars/female_mcza9a.png"
          : "https://res.cloudinary.com/connectx/image/upload/v1601755269/Default%20Avatars/male_krak66.png";
      },
    },
    followed: {
      type: Boolean,
      default: false,
    },

    gender: {
      type: String,
      required: true,
    },
    followers: [{ user: { type: ObjectId, ref: "Users" }, roomId: String }],
    following: [{ type: ObjectId, ref: "Users" }],
  },
  { versionKey: false, timestamps: true }
);

export default model("Users", userSchema);
