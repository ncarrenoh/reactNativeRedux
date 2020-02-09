import { _fetchUserData } from '../../api/data';
import { FETCH_USER } from '../types';

export const getUser = () => async (dispatch, getState) => {
  const users = await _fetchUserData();
  dispatch({ type: FETCH_USER, payload: users });
};
