import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import Row from './Row';

// function Avatar({ imageUrl }) {
//   return <Image style={styles.avatar} source={require(`${imageUrl}`)} />;
// }

export default function Header({ thumnailUrl, profileName }) {
  return (
    <View style={styles.container}>
      <Row>
        <View style={styles.content}>
          <Image style={styles.avatar} source={{ uri: `${thumnailUrl}` }} />
          <Text style={styles.name}>{profileName}</Text>
        </View>
        <Icon
          type="MaterialCommunityIcons"
          name="dots-vertical"
          style={styles.icon}
        />
      </Row>
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 50,
  },
  container: {
    marginVertical: 10,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  name: {
    textAlign: 'center',
    color: '#000',
    paddingVertical: 5,
    paddingLeft: 10,
    fontSize: 15,
    fontWeight: '600',
  },
  icon: {
    position: 'absolute',
    right: 10,
    top: 10,
  },
});
