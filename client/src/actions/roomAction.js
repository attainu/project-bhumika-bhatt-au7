import { GET_ROOM } from "../configs/actionTypes";

export const getRoom = (room) => {
  return {
    type: GET_ROOM,
    room: room,
  };
};
