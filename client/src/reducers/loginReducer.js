import { LOGIN } from "../configs/actionTypes";

const initialState = {
  id: "",
  token: "",
  firstName: "",
  lastName: "",
  email: "",
  userName: "",
  country: "",
  mobile: "",
};

const loginReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        id: action.payload._id,
        token: action.payload.token,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        userName: action.payload.userName,
        country: action.payload.country,
        mobile: action.payload.mobile,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
