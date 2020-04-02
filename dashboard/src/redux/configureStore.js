/* eslint-disable */
import window from "global/window";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";

import transform from "./transform";
import rootReducer from "./reducer";

let composeEnhancers = compose;
if (
  process.env.NODE_ENV === "development" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
}

const makeConfiguredStore = (reducer, initialState) =>
  createStore(
    reducer,
    initialState,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );

export default (initialState = {}, { isServer }) => {
  if (isServer) {
    return makeConfiguredStore(rootReducer, initialState);
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;
    const persistConfig = {
      key: "root",
      storage,
      transforms: [transform],
    };
    const persistedReducer = persistReducer(persistConfig, rootReducer);
    const store = makeConfiguredStore(persistedReducer, initialState);
    store.__persistor = persistStore(store); // Nasty hack
    return store;
  }
};
