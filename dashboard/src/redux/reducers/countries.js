import Immutable from "seamless-immutable";
import {
  COUNTRY_FAILURE,
  COUNTRY_REQUEST,
  COUNTRY_SUCCESS,
  TIMELINE_FAILURE,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
} from "../constants/countries";

const initialState = Immutable({
  countryRsf: false,
  country: {},
  timelineRsf: false,
  timeline: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTRY_REQUEST:
      return state.merge({ countryRsf: true });
    case COUNTRY_SUCCESS:
      return state.merge({ countryRsf: false, country: action.payload });
    case COUNTRY_FAILURE:
      return state.merge({ countryRsf: false, error: action.payload });
    case TIMELINE_REQUEST:
      return state.merge({ timelineRsf: true });
    case TIMELINE_SUCCESS:
      return state.merge({ timelineRsf: false, timeline: action.payload });
    case TIMELINE_FAILURE:
      return state.merge({ timelineRsf: false, error: action.payload });
    default:
      return state;
  }
};
