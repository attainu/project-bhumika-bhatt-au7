import {
  GET_ROOM_ID,
  GET_CHAT_MESSAGE,
  GET_CHAT_USER,
} from "../configs/actionTypes";

export const getRoomId = (roomId) => {
  return {
    type: GET_ROOM_ID,
    roomId: roomId,
  };
};

export const getChatUser = (user) => {
  return {
    type: GET_CHAT_USER,
    chatUser: user,
  };
};

export const getMessage = (message) => {
  return {
    type: GET_CHAT_MESSAGE,
    message: message,
  };
};
