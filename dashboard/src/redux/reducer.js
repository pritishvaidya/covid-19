import { combineReducers } from "redux";

import appReducer from "./reducers/app";
import homeReducer from "./reducers/home";
import mapsReducer from "./reducers/maps";

export default combineReducers({
  app: appReducer,
  home: homeReducer,
  maps: mapsReducer,
});
