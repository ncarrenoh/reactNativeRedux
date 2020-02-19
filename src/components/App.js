import React from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { store } from '../store';
import Navigator from '../routes/app';

console.disableYellowBox = true;
// AsyncStorage.clear()
export default () => {
  return (
    <Provider store={store}>
      <Navigator />
    </Provider>
  );
};
