import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store';
import Navigator from '../routes/app';

console.disableYellowBox = true;

export default () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
);
