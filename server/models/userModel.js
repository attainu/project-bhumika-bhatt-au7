import { userSchema } from "../schemas";

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
}

export default new User();
