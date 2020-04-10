import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen, RegisterScreen } from '../screens';

const Stack = createStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator headerMode="none">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
}
