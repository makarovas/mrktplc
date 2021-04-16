import { initialState } from "../initialState";
import { LOGOUT, LOGIN } from "../constans/auth";
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGOUT: {
      return {
        ...state,
        ...action.payload,
      };
    }
    case LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return state;
    }
  }
};
