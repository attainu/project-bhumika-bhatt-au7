import { LOGIN } from "../configs/actionTypes";

export const loginAction = (user) => {
  return { type: LOGIN, payload: user };
};
