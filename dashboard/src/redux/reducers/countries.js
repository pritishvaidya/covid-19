import Immutable from "seamless-immutable";
import {
  COUNTRY_FAILURE,
  COUNTRY_REQUEST,
  COUNTRY_SUCCESS,
  RECOVERED_FAILURE,
  RECOVERED_REQUEST,
  RECOVERED_SUCCESS,
} from "../constants/countries";

const initialState = Immutable({
  countryRsf: false,
  country: {},
  recoveredRsf: false,
  recovered: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_REQUEST:
      return state.merge({ countryRsf: true });
    case COUNTRY_SUCCESS:
      return state.merge({ countryRsf: false, country: action.payload });
    case COUNTRY_FAILURE:
      return state.merge({ countryRsf: false, error: action.payload });
    case RECOVERED_REQUEST:
      return state.merge({ recoveredRsf: true });
    case RECOVERED_SUCCESS:
      return state.merge({ recoveredRsf: false, recovered: action.payload });
    case RECOVERED_FAILURE:
      return state.merge({ recoveredRsf: false, error: action.payload });
    default:
      return state;
  }
};
