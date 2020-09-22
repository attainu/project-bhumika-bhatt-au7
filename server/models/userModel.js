import { userSchema } from "../schemas";
import { hashPassword } from "../utils";

class User {
  login = (user) => {
    return new Promise((res, rej) => {
      userSchema.findOne({ email: user.email }, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };

  signup = (user) => {
    return new Promise(async (res, rej) => {
      const newUser = {
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: await hashPassword(user.password),
      };

      userSchema.create(newUser, (err, info) => {
        if (err) {
          rej(err);
        } else {
          res(info);
        }
      });
    });
  };
}

export default new User();
