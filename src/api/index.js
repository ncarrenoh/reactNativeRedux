import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
const url = 'https://api.randomuser.me/';

export default { url };

// export const getToken = async payload => {
//   const { email, password } = payload;
//   try {
//     let req = await Axios.post(`${url}/api/login`, {
//       email,
//       password,
//     });
//     const res = await req.data;
//     const { data } = res;
//     await AsyncStorage.setItem('token', data.token);
//     return data;
//   } catch (error) {
//     const err = { message: error };
//     return { err };
//   }
// };
