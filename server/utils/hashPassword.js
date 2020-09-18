import { hash, genSalt } from "bcryptjs";

const hashPassword = (password) => {
  return new Promise((res, rej) => {
    genSalt(10, (err, salt) => {
      hash(password, salt, (err, hashedPassword) => {
        if (err) {
          rej(err);
        } else {
          res(hashedPassword);
        }
      });
    });
  });
};

export default hashPassword;
