const initialState = {
  currentUser: {},
  users: [],
};

export default (state = initialState, action) => {
  if (action.type === 'LOG_IN') {
    return { ...state, currentUser: action.payload };
  }
  return { ...state };
};
