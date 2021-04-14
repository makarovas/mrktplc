import { initialState } from "../initialState";

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        ...state,
        ...action.payload,
      };
    }
    case "LOGOUT": {
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
