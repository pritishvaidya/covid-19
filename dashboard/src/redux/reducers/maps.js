import Immutable from "seamless-immutable";
import {
  LOCATIONS_FAILURE,
  LOCATIONS_REQUEST,
  LOCATIONS_SUCCESS,
} from "../constants/maps";

const initialState = Immutable({
  locationsRsf: false,
  locations: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_REQUEST:
      return state.merge({ locationsRsf: true });
    case LOCATIONS_SUCCESS:
      return state.merge({ locationsRsf: false, locations: action.payload });
    case LOCATIONS_FAILURE:
      return state.merge({ locationsRsf: false, error: action.payload });
    default:
      return state;
  }
};
