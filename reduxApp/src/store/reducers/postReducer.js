import { FETCH_POST } from '../types';

export default (state, action) => {
  if (action.type === FETCH_POST) {
    return { ...state, post: action.payload };
  }
  return { ...state };
};
