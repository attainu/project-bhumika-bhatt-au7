import { model, Schema } from "mongoose";

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

    image: {
      type: String,
      default: function () {
        return this.gender === "female"
          ? "https://res.cloudinary.com/connectx/image/upload/v1601755269/Default%20Avatars/female_mcza9a.png"
          : "https://res.cloudinary.com/connectx/image/upload/v1601755269/Default%20Avatars/male_krak66.png";
      },
    },

    gender: {
      type: String,
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

export default model("Users", userSchema);
