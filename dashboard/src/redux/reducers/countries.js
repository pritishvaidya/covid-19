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
  countryStatsRsf: false,
  countryStats: {},
  countryTimelineRsf: false,
  countryTimeline: {},
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
      return { ...state, countryStatsRsf: true };
    case COUNTRY_SUCCESS:
      return { ...state, countryStatsRsf: false, countryStats: action.payload };
    case COUNTRY_FAILURE:
      return { ...state, countryStatsRsf: false, error: action.payload };
    case TIMELINE_REQUEST:
      return { ...state, countryTimelineRsf: true };
    case TIMELINE_SUCCESS:
      return {
        ...state,
        countryTimelineRsf: false,
        countryTimeline: action.payload,
      };
    case TIMELINE_FAILURE:
      return { ...state, countryTimelineRsf: false, error: action.payload };
    default:
      return state;
  }
};
