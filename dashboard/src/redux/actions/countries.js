import {
  COUNTRY_SUCCESS,
  COUNTRY_REQUEST,
  COUNTRY_FAILURE,
  RECOVERED_REQUEST,
  RECOVERED_SUCCESS,
  RECOVERED_FAILURE,
} from "../constants/countries";
import { locationById } from "../../api/coronavirus-tracker-api";
import { countryRecovered } from "../../api/covid-19-api";

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

function fetchRecoveredRequest() {
  return {
    type: RECOVERED_REQUEST,
  };
}

function fetchRecoveredSuccess(payload) {
  return {
    type: RECOVERED_SUCCESS,
    payload,
  };
}

function fetchRecoveredFailure(error) {
  return {
    type: RECOVERED_FAILURE,
    error,
  };
}

function fetchCountry(id) {
  return async (dispatch) => {
    dispatch(fetchCountryRequest());
    locationById(id)
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchCountrySuccess(res.location));
        return res.location;
      })
      .catch((error) => {
        dispatch(fetchCountryError(error));
      });
  };
}

function fetchRecovered(id) {
  return async (dispatch) => {
    dispatch(fetchRecoveredRequest(id));
    countryRecovered(id)
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchRecoveredSuccess(res[0]));
        return res[0];
      })
      .catch((error) => {
        dispatch(fetchRecoveredFailure(error));
      });
  };
}

export {
  fetchCountry,
  fetchCountryRequest,
  fetchCountrySuccess,
  fetchCountryError,
  fetchRecovered,
  fetchRecoveredRequest,
  fetchRecoveredSuccess,
  fetchRecoveredFailure,
};
