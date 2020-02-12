import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import { LoginScreen, HomeScreen, SettingsScreen } from '../screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeTabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const icon = <FontAwesome5 name={'comments'} solid />;

const Tab = createBottomTabNavigator();
const tabOptions = {
  tabBarLabel: 'Homes',
  tabBarIcon: ({ color, size }) => icon,
};
const HomeTabNavigator = () => (
  <Tab.Navigator tabBarOptions={{
        activeTintColor: '#e91e63',
  }}>
    <Tab.Screen name="Home" component={HomeScreen} options={tabOptions} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
);

export default AppStack;
