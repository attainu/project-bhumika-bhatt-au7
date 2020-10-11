import { GET_ROOM_ID, GET_CHAT_MESSAGE } from "../configs/actionTypes";

export const getRoomId = (roomId) => {
  return {
    type: GET_ROOM_ID,
    roomId: roomId,
  };
};

export const getMessage = (message) => {
  return {
    type: GET_CHAT_MESSAGE,
    message: message,
  };
};
