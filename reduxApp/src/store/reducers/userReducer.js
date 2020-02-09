import { FETCH_USER } from '../types';

const initialState = {
  users: [],
};

export default (state = initialState, action) => {
  if (action.type === FETCH_USER) {
    return { ...state, users: action.payload };
  }
  return { ...state };
};
