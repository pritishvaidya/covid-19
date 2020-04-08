import {
  COUNTRIES_REQUEST,
  COUNTRIES_SUCCESS,
  COUNTRIES_FAILURE,
  COUNTRY_SUCCESS,
  COUNTRY_REQUEST,
  COUNTRY_FAILURE,
  TIMELINE_REQUEST,
  TIMELINE_SUCCESS,
  TIMELINE_FAILURE,
} from "../constants/countries";

import {
  countries,
  country,
  countryTimelines,
} from "../../api/novel-covid-api";

function fetchCountriesRequest() {
  return {
    type: COUNTRIES_REQUEST,
  };
}
function fetchCountriesSuccess(payload) {
  return {
    type: COUNTRIES_SUCCESS,
    payload,
  };
}
function fetchCountriesError(error) {
  return {
    type: COUNTRIES_FAILURE,
    error,
  };
}

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

function fetchCountries() {
  return async (dispatch) => {
    dispatch(fetchCountriesRequest());
    countries()
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCountriesSuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchCountriesError(error));
      });
  };
}

function fetchCountry(id) {
  return async (dispatch) => {
    dispatch(fetchCountryRequest());
    country(id)
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCountrySuccess(res));
        return res;
      })
      .catch((error) => {
        dispatch(fetchCountryError(error));
      });
  };
}

function fetchTimeline(id) {
  return async (dispatch) => {
    dispatch(fetchTimelineRequest(id));
    countryTimelines(id)
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchTimelineSuccess(res.timeline));
        return res.timeline;
      })
      .catch((error) => {
        dispatch(fetchTimelineFailure(error));
      });
  };
}

export {
  fetchCountries,
  fetchCountriesRequest,
  fetchCountriesSuccess,
  fetchCountriesError,
  fetchCountry,
  fetchCountryRequest,
  fetchCountrySuccess,
  fetchCountryError,
  fetchTimeline,
  fetchTimelineRequest,
  fetchTimelineSuccess,
  fetchTimelineFailure,
};
