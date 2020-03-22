import Immutable from 'seamless-immutable'
import { DARK_MODE, SET_MODE } from "../constants/app";

const initialState = Immutable({
  mode: DARK_MODE
})

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:
      return state.merge({ mode: action.mode })
    default:
      return state
  }
}
