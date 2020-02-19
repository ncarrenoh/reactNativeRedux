import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { AppStack } from '../routes/app';
import { AuthStack } from '../routes/auth';
import { View, ActivityIndicator } from 'react-native';

export const AuthLoading = () => {
  const [token, setToken] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let userToken;
    const _bootstrapAsync = async () => {
      userToken = await AsyncStorage.getItem('token');
      setToken(userToken);
      setIsLoading(false);
    };
    _bootstrapAsync();
  });

  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="" />
      </View>
    );
  }
};

// export default AuthLoading;
