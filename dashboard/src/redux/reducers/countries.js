import {
  COUNTRIES_REQUEST,
  COUNTRIES_SUCCESS,
  COUNTRIES_FAILURE,
  COUNTRY_FAILURE,
  COUNTRY_REQUEST,
  COUNTRY_SUCCESS,
  TIMELINE_FAILURE,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
} from "../constants/countries";

const initialState = {
  countryRsf: false,
  country: {},
  timelineRsf: false,
  timeline: {},
  countries: [],
  countriesRsf: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case COUNTRIES_REQUEST:
      return { ...state, countriesRsf: true };
    case COUNTRIES_SUCCESS:
      return { ...state, countriesRsf: false, countries: action.payload };
    case COUNTRIES_FAILURE:
      return { ...state, countriesRsf: false, error: action.payload };
    case COUNTRY_REQUEST:
      return { ...state, countryRsf: true };
    case COUNTRY_SUCCESS:
      return { ...state, countryRsf: false, country: action.payload };
    case COUNTRY_FAILURE:
      return { ...state, countryRsf: false, error: action.payload };
    case TIMELINE_REQUEST:
      return { ...state, timelineRsf: true };
    case TIMELINE_SUCCESS:
      return { ...state, timelineRsf: false, timeline: action.payload };
    case TIMELINE_FAILURE:
      return { ...state, timelineRsf: false, error: action.payload };
    default:
      return state;
  }
};
