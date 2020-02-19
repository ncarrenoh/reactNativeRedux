import { getToken } from '../../api';
import { LOG_IN } from '../types';

// export const fetchUsers = () => async dispatch => {
//   const res = await Axios.get(url);
//   const users = await res.data;
//   dispatch({ type: FETCH_USERS, payload: users });
// };

export const login = (username, password) => async (dispatch, getState) => {
  const user = getState().user;
  const token = await getToken({ email: username, password: password });
  user.username = username;
  user.token = token;
  dispatch({ type: LOG_IN, payload: user });
};
