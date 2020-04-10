import React, { useState } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  View,
  Image,
  StyleSheet,
  Text,
} from 'react-native';

import Header from './Header';
import Footer from './Footer';

Post.defaultProps = {
  likesValue: 0,
  user: { name: 'default' },
};
// email vendra desde redux!
// en este ejemplo usaremos uno constante
function Post({ user }) {
  const [likesIcon, setLikesIcon] = useState('heart-outline');
  const [likes, setLikes] = useState(10);

  const onChangeLikesIcon = () => {
    if (likesIcon === 'heart-outline') {
      setLikesIcon('heart');
      setLikes(likes + 1);
    } else {
      setLikesIcon('heart-outline');
      setLikes(likes - 1);
    }
  };

  return (
    <View style={styles.container}>
      <Header thumnailUrl={user.picture.medium} profileName={user.name.title} />
      <Image
        resizeMode="stretch"
        // defaultSource={() => <ActivityIndicator size="small" />}
        source={{ uri: user.picture.large }}
        style={styles.image}
      />
      <Footer likesIcon={likesIcon} onPressIcon={onChangeLikesIcon} />
      <Text style={styles.description}>{likes} Me gusta</Text>
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
    maxHeight: height * 0.9,
    width,
  },
  image: {
    width: '100%',
    minHeight: 400,
    maxHeight: 500,
  },
  description: {
    paddingHorizontal: 20,
    fontWeight: '600',
    fontSize: 15,
    marginBottom: 10,
  },
});

export default Post;
