import { DARK_MODE, DISABLED, SET_MENU, SET_MODE } from "../constants/app";

const initialState = {
  mode: DARK_MODE,
  menu: DISABLED,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return { ...state, mode: action.mode };
    case SET_MENU:
      return { ...state, menu: action.mode };
    default:
      return state;
  }
};
