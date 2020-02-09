import React from 'react';
import { store, persistor } from '../store';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import ListUsers from './ListUsers';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ListUsers />
    </PersistGate>
  </Provider>
);

export default App;
