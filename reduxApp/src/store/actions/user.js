import Axios from 'axios';
import { FETCH_USERS, LOG_IN } from '../types';
const url = 'https://jsonplaceholder.typicode.com/users';

export const fetchUsers = () => async dispatch => {
  const res = await Axios.get(url);
  const users = await res.data;
  dispatch({ type: FETCH_USERS, payload: users });
};

export const login = (username, password) => async dispatch => {
  const res = await Axios.get(url);
  const users = await res.data;
  const currentUser = users.find(user => user.username === username);
  dispatch({ type: LOG_IN, payload: currentUser });
};
