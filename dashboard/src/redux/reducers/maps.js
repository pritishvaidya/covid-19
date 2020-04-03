import {
  LOCATIONS_FAILURE,
  LOCATIONS_REQUEST,
  LOCATIONS_SUCCESS,
} from "../constants/maps";

const initialState = {
  locationsRsf: false,
  locations: [],
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOCATIONS_REQUEST:
      return { ...state, locationsRsf: true };
    case LOCATIONS_SUCCESS:
      return { ...state, locationsRsf: false, locations: action.payload };
    case LOCATIONS_FAILURE:
      return { ...state, locationsRsf: false, error: action.payload };
    default:
      return state;
  }
};
