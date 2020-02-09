import { createStore, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import thunk from 'redux-thunk';
import { persistStore, persistReducer } from 'redux-persist';
import rootReducer from './reducers';
import AsyncStorage from '@react-native-community/async-storage';
import { actions } from './actions';

const initialState = {};

const config = {
  key: 'root',
  storage: AsyncStorage,
};

const pReducer = persistReducer(config, rootReducer);

const store = createStore(
  pReducer,
  initialState,
  compose(applyMiddleware(thunk, logger)),
);

const persistor = persistStore(store);
export { store, persistor, actions };
