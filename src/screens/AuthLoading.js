import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { connect } from 'react-redux';
import AppStack from '../routes/app';
import AuthStack from '../routes/auth';

const Stack = createStackNavigator();

function AuthLoading({ user }) {
  // cdm cdu cwu
  const [userToken, setUserToken] = useState(null);

  const onChangeToken = value => {
    setUserToken(value);
  };

  useEffect(() => {
    if (user.token) {
      onChangeToken(user.token);
    }
  }, [user.token]);

  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        {userToken ? (
          <Stack.Screen name="App" component={AppStack} />
        ) : (
          <Stack.Screen name="Auth" component={AuthStack} />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  null,
)(AuthLoading);
