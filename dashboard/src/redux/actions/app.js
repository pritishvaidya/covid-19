import {SET_MODE} from "../constants/app";

function setMode(mode) {
  return {
    type: SET_MODE,
    mode
  }
}

export {
  setMode
}