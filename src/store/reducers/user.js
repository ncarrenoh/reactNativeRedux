import { LOG_IN } from '../types';

const initialState = {
  token: null,
  username: '',
};

export default (state = initialState, action) => {
  if (action.type === LOG_IN) {
    return { ...state, user: action.payload };
  }
  return { ...state };
};
