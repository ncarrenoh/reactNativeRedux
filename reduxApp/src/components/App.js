import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import AppStack from '../routes/app';

console.disableYellowBox = true;

const App = () => (
  <Provider store={store}>
    <AppStack />
  </Provider>
);

export default App;
