import { userSchema } from "../schemas";
import { hashPassword } from "../utils";

class Profile {
  getUser = (userName) => {
    return new Promise((res, rej) => {
      userSchema.findOne({ userName: userName }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  updateUser = (user) => {
    return new Promise((res, rej) => {
      userSchema.updateOne(
        { _id: user._id },
        {
          firstName: user.firstName,
          lastName: user.lastName,
          userName: user.userName,
          country: user.country,
          mobile: user.mobile,
        },
        (err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        }
      );
    });
  };

  updateUserPassword = (user) => {
    return new Promise(async (res, rej) => {
      userSchema.updateOne(
        { _id: user._id },
        {
          password: await hashPassword(user.password),
        },
        (err, info) => {
          if (err) {
            rej(err);
          } else {
            res(info);
          }
        }
      );
    });
  };
}

export default new Profile();
