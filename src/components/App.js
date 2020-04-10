import React, { useState, useEffect, useCallback } from 'react';
import { Provider } from 'react-redux';
import AsyncStorage from '@react-native-community/async-storage';
import { store } from '../store';
import Navigator from '../routes/app';
import AuthLoading from '../screens/AuthLoading';
import Header from './Header';
import Footer from './Footer';
import Post from './Post';
import axios from 'axios';
import { ActivityIndicator, FlatList } from 'react-native';

console.disableYellowBox = true;
// export default () => {
//   return (
//     <Provider store={store}>
//       <AuthLoading />
//     </Provider>
//   );
// };

export default () => {
  const [users, setUsers] = useState([]);
  const [refreshing, setRefreshing] = useState(true);
  async function fetchUsers() {
    const res = await axios.get('https://api.randomuser.me/?results=30');
    const data = await res.data.results;
    if (data.length) {
      setUsers(data);
      setRefreshing(false);
    } else {
      console.log('err');
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []); // componentDidMount

  function _renderPost({ item }) {
    return <Post user={item} />;
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleOnRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => fetchUsers());
  });

  return users.length ? (
    <FlatList
      keyExtractor={item => item.id.value}
      initialNumToRender={4}
      data={users}
      renderItem={_renderPost}
      onRefresh={handleOnRefresh}
      refreshing={refreshing}
    />
  ) : (
    <ActivityIndicator size="large" />
  );
};
