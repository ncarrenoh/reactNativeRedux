import userReducer from './user';
import postReducer from './post';
import appReducer from './app';

import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  app: appReducer,
  user: userReducer,
  post: postReducer,
});
