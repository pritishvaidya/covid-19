import { DARK_MODE, SET_MODE } from "../constants/app";

const initialState = {
  mode: DARK_MODE,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};
