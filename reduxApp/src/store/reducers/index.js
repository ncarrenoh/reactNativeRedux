import userReducer from './user';
import postReducer from './post';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  user: userReducer,
  post: postReducer,
});
