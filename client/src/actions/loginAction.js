import { LOGIN } from "../config/actionTypes";

export const loginAction = (user) => {
  return { type: LOGIN, payload: user };
};
