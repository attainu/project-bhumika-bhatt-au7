import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import postReducer from "./postReducer";
import roomReducer from "./roomReducer";

export default combineReducers({
  login: loginReducer,
  post: postReducer,
  room: roomReducer,
});
