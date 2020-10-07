import { GET_ROOM } from "../configs/actionTypes";

const reducer = (state, action) => {
  return {
    room: action.room,
  };
};

export default reducer;
