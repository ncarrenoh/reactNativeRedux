import getPhotos from '../../api';
import { FETCH_POSTS } from '../types';
import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/photos';

export const fetchPosts = () => async dispatch => {
  const res = await axios.get(url);
  const posts = await res.data;
  dispatch({ type: FETCH_POSTS, payload: posts });
};
