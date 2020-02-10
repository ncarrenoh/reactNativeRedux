import Axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/users';

export const fetch_users = () => async dispatch => {
  const res = await Axios.get(url);
  const users = await res.data;
  dispatch({ type: 'FETCH_USERS', payload: users });
};

export const login = (username, password) => async dispatch => {
  const res = await Axios.get(url);
  const users = await res.data;
  const currentUser = users.find(user => user.username === username);
  dispatch({ type: 'LOG_IN', payload: currentUser });
};
