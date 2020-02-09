const apiUrl = 'https://jsonplaceholder.typicode.com';

import axios from 'axios';

export const _fetchUserData = async () => {
  const res = await axios.get(`${apiUrl}/users`);
  const user = await res.data;
  return user;
};
