import axios from "axios";

import * as actionTypes from "./actionTypes";

export const fetchStart = () => {
  return {
    type: actionTypes.FETCH_START,
  };
};

export const fetchSuccess = (posts) => {
  return {
    type: actionTypes.FETCH_SUCCESS,
    posts: posts,
  };
};

export const fetchFail = (error) => {
  return {
    type: actionTypes.FETCH_FAIL,
    error: error,
  };
};

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("/posts", {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
      });
  };
};

export const fetchUserPosts = (userId) => {
  return (dispatch) => {
    dispatch(fetchStart());
    axios
      .get("posts/myPosts", userId, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        console.log(response.data);
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
      });
  };
};

export const createPost = (title, description, photo) => {
  return (dispatch) => {
    const data = {
      title,
      description,
      photo,
    };
    axios
      .post("/posts/createPost", data, {
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
      })
      .then((response) => {
        dispatch(fetchSuccess(response.data));
      })
      .catch((error) => {
        dispatch(fetchFail(error));
      });
  };
};
