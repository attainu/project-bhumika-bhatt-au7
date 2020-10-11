import { GET_POST, GET_MY_POST } from "../configs/actionTypes";

const initialState = {
  posts: [],
  myPost: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_POST:
      return {
        ...state,
        posts: action.posts,
      };
    case GET_MY_POST:
      return {
        ...state,
        myPost: action.myPost,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
