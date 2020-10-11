import { combineReducers } from "redux";

import loginReducer from "./loginReducer";
import postReducer from "./postReducer";
import chatReducer from "./chatReducer";

export default combineReducers({
  login: loginReducer,
  post: postReducer,
  chatRoom: chatReducer,
});
