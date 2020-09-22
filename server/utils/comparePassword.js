import { compare } from "bcryptjs";

const comparePassword = (password, hashedPassword) => {
  return new Promise((res, rej) => {
    compare(password, hashedPassword, (err, status) => {
      if (err) {
        rej(err);
      } else {
        res(status);
      }
    });
  });
};

export default comparePassword;
