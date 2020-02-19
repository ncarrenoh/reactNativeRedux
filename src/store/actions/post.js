import getPhotos from '../../api';
import { FETCH_POSTS } from '../types';

export const fetchPosts = () => async dispatch => {
  const posts = (await getPhotos()).data;
  dispatch({ type: FETCH_POSTS, payload: posts });
};
