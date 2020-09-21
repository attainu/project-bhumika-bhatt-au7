import { LOGIN } from "../configs/actionTypes";

const initialState = {
  name: "",
  email: "",
};

const loginReducer = (state, action) => {
  state = state || initialState;

  switch (action.type) {
    case LOGIN: {
      const user = {
        name: action.payload.name,
        email: action.payload.email,
      };

      return {
        ...state,
        name: user.name,
        email: user.email,
      };
    }
    default: {
      return state;
    }
  }
};

export default loginReducer;
