import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { LoginScreen, SettingsScreen, HomeScreen } from '../screens';


import Icon from 'react-native-vector-icons/FontAwesome';

const Stack = createStackNavigator();
console.log(LoginScreen);
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

const Tab = createBottomTabNavigator();

const tabHomeOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ color, size }) => <Icon name="home" size={size} />,
};

const tabSettingsOptions = {
  tabBarLabel: 'Mi Perfil',
  tabBarIcon: ({ color, size }) => <Icon name="align-justify" size={size} />,
};

const HomeTabNavigator = () => (
  <Tab.Navigator tabBarOptions={{ activeTintColor: '#2fb806' }}>
    <Tab.Screen name="Home" component={HomeScreen} options={tabHomeOptions} />
    <Tab.Screen
      name="Settings"
      component={SettingsScreen}
      options={tabSettingsOptions}
    />
  </Tab.Navigator>
);

export default AppStack;
