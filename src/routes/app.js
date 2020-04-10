import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { connect } from 'react-redux';

import {
  CameraScreen,
  HomeScreen,
  ProfileScreen,
  SettingsScreen,
  PostsScreen,
  LoginScreen,
} from '../screens';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Text } from 'react-native';
import { Icon } from 'native-base';

// import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Drawer = createDrawerNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={({ navigation }) => ({
          headerTitle: ' Instagram  ',
          headerTitleStyle: {
            flex: 1,
            fontFamily: 'Times New Roman',
            fontStyle: 'italic',
            fontSize: 25,
          },
          headerLeft: () => (
            <Icon
              name="camera"
              type="MaterialCommunityIcons"
              style={{ padding: 10, fontSize: 25 }}
            />
          ),
        })}
      />
      <Stack.Screen
        name="CameraScreen"
        component={CameraScreen}
        options={{ header: null }}
      />
    </Stack.Navigator>
  );
};

const ProfileStack = () => (
  <Stack.Navigator initialRouteName="Profile">
    <Stack.Screen
      name="Profile"
      component={ProfileScreen}
      options={({ navigation, route }) => ({
        headerStyle: { backgroundColor: '#f2f2f2' },
        headerTitle: null,
        headerLeft: () => (
          <Text
            style={{
              paddingLeft: 20,
              fontWeight: '500',
              fontFamily: 'Arial',
              fontSize: 16,
            }}>
            {route.params?.name ?? 'emaily'}
          </Text>
        ),
        headerRight: ({ tintColor }) => (
          <Icon
            name="format-align-justify"
            type="MaterialCommunityIcons"
            style={{ paddingRight: 20, color: tintColor, fontSize: 25 }}
            onPress={() => navigation.openDrawer()}
          />
        ),
      })}
    />
    <Stack.Screen name="Settings" component={SettingsScreen} />
    <Stack.Screen name="Posts" component={PostsScreen} />
  </Stack.Navigator>
);

const ProfileDrawerNavigator = () => (
  <Drawer.Navigator drawerPosition="right" hideStatusBar drawerType="slide">
    <Drawer.Screen
      name="Profile"
      component={ProfileStack}
      options={({ navigation }) => ({
        title: 'Perfil',
        drawerIcon: ({ color, size }) => (
          <Icon
            name="account-outline"
            type="MaterialCommunityIcons"
            style={{ fontSize: size, color: color }}
          />
        ),
      })}
    />
    <Drawer.Screen name="Settings" component={SettingsScreen} />
  </Drawer.Navigator>
);

const TabStack = () => {
  return (
    <Tab.Navigator
      tabBarOptions={{ activeTintColor: '#000', inactiveTintColor: '#bbb' }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={({ navigation }) => ({
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={navigation.isFocused() ? 'home' : 'home-outline'}
              type="MaterialCommunityIcons"
              style={{ fontSize: size, color: color }}
            />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon
              name={navigation.isFocused() ? 'account' : 'account-outline'}
              type="MaterialCommunityIcons"
              style={{ fontSize: size, color: color }}
            />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

const mapStateToProps = state => ({
  user: state.user,
});
export default connect(
  mapStateToProps,
  null,
)(TabStack);
