import { FETCH_POSTS } from '../types';

const initialState = {
  data: [],
};

export default (state = initialState, action) => {
  if (action.type === FETCH_POSTS) {
    return { ...state, data: action.payload };
  }
  return { ...state };
};
