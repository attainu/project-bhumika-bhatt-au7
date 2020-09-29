import { GET_POST, GET_MY_POST, ADD_POST } from "../configs/actionTypes";

export const getPost = (posts) => {
  return {
    type: GET_POST,
    posts: posts,
  };
};

export const getMyPost = (myPost) => {
  return {
    type: GET_MY_POST,
    myPost: myPost,
  };
};
