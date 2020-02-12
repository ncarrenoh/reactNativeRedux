const url = 'https://jsonplaceholder.typicode.com/photos';
import Axios from 'axios';
import { FETCH_POSTS } from '../types';

export const fetchPosts = () => async dispatch => {
  const res = await Axios.get(url);
  const posts = await res.data;
  dispatch({ type: FETCH_POSTS, payload: posts });
};
