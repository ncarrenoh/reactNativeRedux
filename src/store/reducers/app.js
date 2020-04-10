const initialState = {
  user: {},
  post: {},
};

export default (state = initialState, action) => {
  if (action.type === 'UPDATE_POST') {
    return { ...state, post: action.payload };
  }
  return { ...state };
};
