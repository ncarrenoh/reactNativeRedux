import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const url = 'http://localhost:4000';

export const getToken = async payload => {
  const { email, password } = payload;
  try {
    const req = await Axios.post(`${url}/api/login`, {
      email,
      password,
    });
    const res = await req.data;
    const { data } = res.data;
    const userToken = data.token;
    AsyncStorage.setItem('token', userToken);
    return userToken;
  } catch (error) {
    const err = { message: error };
    return { err };
  }
};
