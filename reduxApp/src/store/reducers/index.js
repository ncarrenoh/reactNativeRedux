import userReducer from './userReducer';
import postReducer from './postReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  users: userReducer,
  posts: postReducer,
});

export default rootReducer;
