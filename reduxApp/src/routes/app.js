import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Login';
import DashboardScreen from '../screens/Dashboard';

const defaultNavigationOptions = {
  initialRouteName: 'HomeScreen',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#3b5998',
    },
    headerTitleStyle: {
      textAlign: 'center',
      flex: 1,
      fontSize: 20,
      color: '#fff',
      fontWeight: 'bold',
    },
  },
};
const AppStack = createStackNavigator(
  {
    Login: {
      screen: LoginScreen,
    },
    Dashboard: {
      screen: DashboardScreen,
    },
  },
  defaultNavigationOptions,
);

export default AppStack;
