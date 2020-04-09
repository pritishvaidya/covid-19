import { SET_MODE, SET_MENU } from "../constants/app";

function setMode(mode) {
  return {
    type: SET_MODE,
    mode,
  };
}

function setMenu(mode) {
  return {
    type: SET_MENU,
    mode,
  };
}

export { setMode, setMenu };
