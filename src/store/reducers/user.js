import { LOG_IN } from '../types';

const initialState = {
  token: null,
  email: '',
  name: '',
};

export default (state = initialState, action) => {
  if (action.type === LOG_IN) {
    const { token, email, name } = action.payload;
    const user = {
      token,
      name,
      email,
    };
    return { ...state, ...user };
  }
  return { ...state };
};
