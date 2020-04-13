import React, { useState, useEffect, useCallback } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { Provider } from 'react-redux';
import axios from 'axios';
import Post from './src/components/Post';
import { store } from './src/store';
import Navigator from './src/routes/app';
import { AuthLoading } from './src/screens';

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

  function renderPost({ item }) {
    return <Post user={item} />;
  }

  const handleOnRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => fetchUsers());
  });

  return users.length ? (
    <FlatList
      keyExtractor={item => item.id.value}
      initialNumToRender={4}
      data={users}
      renderItem={renderPost}
      onRefresh={handleOnRefresh}
      refreshing={refreshing}
    />
  ) : (
    <ActivityIndicator size="large" />
  );
};
