import {
  LOCATIONS_FAILURE,
  LOCATIONS_REQUEST,
  LOCATIONS_SUCCESS,
} from "../constants/maps";
import { locations } from "../../api/coronavirus-tracker-api";

function fetchLocationsRequest() {
  return {
    type: LOCATIONS_REQUEST,
  };
}

function fetchLocationsSuccess(payload) {
  return {
    type: LOCATIONS_SUCCESS,
    payload,
  };
}

function fetchLocationsError(error) {
  return {
    type: LOCATIONS_FAILURE,
    error,
  };
}

function fetchLocations() {
  return async (dispatch) => {
    dispatch(fetchLocationsRequest());
    locations()
      .then((res) => res.data)
      .then((res) => {
        if (res.error) {
          throw res.error;
        }
        dispatch(fetchLocationsSuccess(res.locations));
        return res.locations;
      })
      .catch((error) => {
        dispatch(fetchLocationsError(error));
      });
  };
}

export {
  fetchLocations,
  fetchLocationsRequest,
  fetchLocationsSuccess,
  fetchLocationsError,
};
