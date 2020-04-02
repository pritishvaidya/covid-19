import {
  ALL_STATS_REQUEST,
  ALL_STATS_SUCCESS,
  ALL_STATS_FAILURE,
} from "../constants/dashboard";

import { all } from "../../api/novel-covid-api";

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

export {
  fetchAllStats,
  fetchAllStatsRequest,
  fetchAllStatsSuccess,
  fetchAllStatsError,
};
