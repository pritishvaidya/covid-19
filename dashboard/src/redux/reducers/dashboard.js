import {
  ALL_STATS_FAILURE,
  ALL_STATS_REQUEST,
  ALL_STATS_SUCCESS,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE,
} from "../constants/dashboard";

const initialState = {
  statsRsf: false,
  stats: {},
  timelineRsf: false,
  timeline: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ALL_STATS_REQUEST:
      return { ...state, statsRsf: true };
    case ALL_STATS_SUCCESS:
      return { ...state, statsRsf: false, stats: action.payload };
    case ALL_STATS_FAILURE:
      return { ...state, statsRsf: false, error: action.payload };
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
