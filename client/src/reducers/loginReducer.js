import { LOGIN } from "../configs/actionTypes";

const initialState = {
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
      const user = {
        firstName: action.payload.firstName,
        lastName: action.payload.lastName,
        email: action.payload.email,
        userName: action.payload.userName,
        country: action.payload.country,
        mobile: action.payload.mobile,
      };

      return {
        ...state,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        userName: user.userName,
        country: user.country,
        mobile: user.mobile,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
