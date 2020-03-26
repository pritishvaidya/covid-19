import window from "global/window";
import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import transform from "./transform";
import rootReducer from "./reducer";

const persistConfig = {
  key: "root",
  storage,
  transforms: [transform],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let composeEnhancers = compose;
  if (
    process.env.NODE_ENV === "development" &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
  }

  const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
  );
  const persistor = persistStore(store);
  return { store, persistor };
};
