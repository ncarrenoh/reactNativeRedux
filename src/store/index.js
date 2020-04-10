import { applyMiddleware, compose, createStore } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';
import { rootReducer } from './reducers';
import { actions } from './actions';

const defaultState = {};
const store = createStore(
  rootReducer,
  defaultState,
  compose(applyMiddleware(thunk, logger)),
);

export { store, actions };
