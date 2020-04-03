import {
  ALL_STATS_REQUEST,
  ALL_STATS_SUCCESS,
  ALL_STATS_FAILURE,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE,
} from "../constants/dashboard";

import { all, timelines } from "../../api/novel-covid-api";

function fetchAllStatsRequest() {
  return {
    type: ALL_STATS_REQUEST,
  };
}
function fetchAllStatsSuccess(payload) {
  return {
    type: ALL_STATS_SUCCESS,
    payload,
  };
}
function fetchAllStatsError(error) {
  return {
    type: ALL_STATS_FAILURE,
    error,
  };
}

function fetchTimelinesRequest() {
  return {
    type: TIMELINE_REQUEST,
  };
}
function fetchTimelinesSuccess(payload) {
  return {
    type: TIMELINE_SUCCESS,
    payload,
  };
}
function fetchTimelinesError(error) {
  return {
    type: TIMELINE_FAILURE,
    error,
  };
}

function fetchAllStats() {
  return async (dispatch) => {
    dispatch(fetchAllStatsRequest());
    all()
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchAllStatsSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchAllStatsError(error));
      });
  };
}

function fetchTimelines() {
  return async (dispatch) => {
    dispatch(fetchTimelinesRequest());
    timelines()
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTimelinesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchTimelinesError(error));
      });
  };
}

export {
  fetchAllStats,
  fetchAllStatsRequest,
  fetchAllStatsSuccess,
  fetchAllStatsError,
  fetchTimelines,
  fetchTimelinesRequest,
  fetchTimelinesSuccess,
  fetchTimelinesError,
};
