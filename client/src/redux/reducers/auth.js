import { initialState } from "../initialState";
import { LOGOUT, LOGIN } from "../constans/auth";
import { register } from "../../api/authentication"


export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      return {
        ...state,
        ...action.payload,
      };
    }
   
    case LOGOUT: {
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
