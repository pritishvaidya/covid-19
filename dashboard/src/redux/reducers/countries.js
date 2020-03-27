import Immutable from "seamless-immutable";
import {
  COUNTRY_FAILURE,
  COUNTRY_REQUEST,
  COUNTRY_SUCCESS,
} from "../constants/countries";

const initialState = Immutable({
  countryRsf: false,
  country: [],
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_SUCCESS:
      return state.merge({ countryRsf: true });
    case COUNTRY_REQUEST:
      return state.merge({ countryRsf: false, country: action.payload });
    case COUNTRY_FAILURE:
      return state.merge({ countryRsf: false, error: action.payload });
    default:
      return state;
  }
};
