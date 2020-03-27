import {
  COUNTRY_SUCCESS,
  COUNTRY_REQUEST,
  COUNTRY_FAILURE,
} from "../constants/countries";
import { locationById } from "../../api/coronavirus-tracker-api";

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

export {
  fetchCountry,
  fetchCountryRequest,
  fetchCountrySuccess,
  fetchCountryError,
};
