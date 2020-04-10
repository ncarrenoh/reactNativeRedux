import { getToken } from '../../api';
import { LOG_IN } from '../types';

// export const fetchUsers = () => async dispatch => {
//   const res = await Axios.get(url);
//   const users = await res.data;
//   dispatch({ type: FETCH_USERS, payload: users });
// };

export const login = (username, password) => async (dispatch, getState) => {
  let user = getState().user;
  try {
    const data = await getToken({
      email: username,
      password: password,
    });
    user.email = username;
    user = { ...user, ...data };
    dispatch({ type: LOG_IN, payload: { ...user } });
  } catch (err) {
    console.log('login err', err);
    dispatch({ type: LOG_IN, payload: err });
  }
};
