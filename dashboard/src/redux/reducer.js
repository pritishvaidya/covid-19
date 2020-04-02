import { combineReducers } from "redux";

import appReducer from "./reducers/app";
import dashboardReducer from "./reducers/dashboard";
import mapsReducer from "./reducers/maps";
import countriesReducer from "./reducers/countries";

export default combineReducers({
  app: appReducer,
  dashboard: dashboardReducer,
  maps: mapsReducer,
  countries: countriesReducer,
});
