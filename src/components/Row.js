import React from 'react';
import { Dimensions, View, StyleSheet } from 'react-native';

export default function Row({ children }) {
  return <View style={styles.row}>{children}</View>;
}

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    height: 50,
    width,
    // justifyContent: 'space-between',
    padding: 10,
  },
});
