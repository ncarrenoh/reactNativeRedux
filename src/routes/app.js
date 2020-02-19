import * as React from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationContainer } from '@react-navigation/native';
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

import Icon from 'react-native-vector-icons/FontAwesome5';

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
            <Icon name="camera" size={30} style={{ padding: 10 }} />
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
      options={({ navigation }) => ({
        headerTitle: null,
        headerLeft: () => <Text> user_name </Text>,
        headerRight: ({ tintColor }) => (
          <Icon
            name="bars"
            size={25}
            color={tintColor}
            style={{ paddingRight: 20 }}
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
        drawerIcon: ({ color, size }) =>
          <Icon name="user" color={color} size={size} />
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
            <Icon name="home" size={size} color={color} />
          ),
        })}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileDrawerNavigator}
        options={({ navigation }) => ({
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          ),
        })}
      />
    </Tab.Navigator>
  );
};

function AppStack({ user }) {
  let [token, setToken] = React.useState(null);

  const getToken = async () => {
    token = await AsyncStorage.getItem('token');
    setToken(token);
  };

  React.useEffect(() => {
    if (user.token) {
      getToken();
    }
  }, [getToken, user]);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {token ? (
          <Stack.Screen name="AppStack" component={TabStack} />
        ) : (
          <Stack.Screen name="LogIn" component={LoginScreen} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});
export default connect( mapStateToProps, null )(AppStack);