import { combineReducers } from 'redux';

import appReducer from './reducers/app'
import homeReducer from './reducers/home'

export default combineReducers({
  app: appReducer,
  home: homeReducer,
});