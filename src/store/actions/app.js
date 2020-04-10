export const updatePost = (type, data) => (dispatch, getState) => {
  const { post } = getState().app;
  post[type] = data;
  dispatch({ type: 'UPDATE_POST', payload: post });
};
