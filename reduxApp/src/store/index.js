import { applyMiddleware, compose, createStore } from 'redux';
import {} from 'react-redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { userReducer } from './reducers';
import { actions } from './actions';

const initialState = {};
const store = createStore(
  userReducer,
  initialState,
  compose(applyMiddleware(thunk, logger)),
);

export { store, actions };
