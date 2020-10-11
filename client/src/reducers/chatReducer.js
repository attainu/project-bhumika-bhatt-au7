import { GET_ROOM_ID, GET_CHAT_MESSAGE } from "../configs/actionTypes";

const reducer = (state, action) => {
  switch (action.type) {
    case GET_ROOM_ID:
      return {
        ...state,
        roomId: action.roomId,
      };
    case GET_CHAT_MESSAGE:
      return {
        ...state,
        message: action.message,
      };
    default:
      return { ...state };
  }
};

export default reducer;
