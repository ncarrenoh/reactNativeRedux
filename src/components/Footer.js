import React from 'react';
import { StyleSheet, View, Dimensions } from 'react-native';
import Row from './Row';
import { Icon } from 'native-base';

export default function Footer({ likesIcon, onPressIcon }) {
  return (
    <View style={styles.container}>
      <Row>
        <Icon
          type="MaterialCommunityIcons"
          name={likesIcon}
          style={styles.icon}
          onPress={onPressIcon}
        />
        <Icon
          type="MaterialCommunityIcons"
          name="comment-outline"
          style={styles.icon}
        />
        <Icon type="MaterialCommunityIcons" name="send" style={styles.icon} />
        <Icon
          type="MaterialCommunityIcons"
          name="bookmark-outline"
          style={{ position: 'absolute', right: 5, top: 5 }}
        />
      </Row>
    </View>
  );
}

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  icon: {
    paddingHorizontal: 5,
  },
  container: {
    height: 50,
    width,
  },
});
