import {
  COUNTRY_SUCCESS,
  COUNTRY_REQUEST,
  COUNTRY_FAILURE,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE,
} from "../constants/countries";

import { countryStats, countryTimeline } from "../../api/the-virus-tracker-api";

function fetchCountryRequest() {
  return {
    type: COUNTRY_REQUEST,
  };
}

function fetchCountrySuccess(payload) {
  return {
    type: COUNTRY_SUCCESS,
    payload,
  };
}

function fetchCountryError(error) {
  return {
    type: COUNTRY_FAILURE,
    error,
  };
}

function fetchTimelineRequest() {
  return {
    type: TIMELINE_REQUEST,
  };
}

function fetchTimelineSuccess(payload) {
  return {
    type: TIMELINE_SUCCESS,
    payload,
  };
}

function fetchTimelineFailure(error) {
  return {
    type: TIMELINE_FAILURE,
    error,
  };
}

function fetchCountry(id) {
  return async (dispatch) => {
    dispatch(fetchCountryRequest());
    countryStats(id)
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCountrySuccess(res.countrydata[0]));
        return res.countrydata[0];
      })
      .catch((error) => {
        dispatch(fetchCountryError(error));
      });
  };
}

function fetchTimeline(id) {
  return async (dispatch) => {
    dispatch(fetchTimelineRequest(id));
    countryTimeline(id)
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTimelineSuccess(res.timelineitems[0]));
        return res.timelineitems[0];
      })
      .catch((error) => {
        dispatch(fetchTimelineFailure(error));
      });
  };
}

export {
  fetchCountry,
  fetchCountryRequest,
  fetchCountrySuccess,
  fetchCountryError,
  fetchTimeline,
  fetchTimelineRequest,
  fetchTimelineSuccess,
  fetchTimelineFailure,
};
