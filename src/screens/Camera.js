import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Camera extends Component {
  constructor(props) {
    super(props);
    this.state = {
      state: '',
    };
  }

  render() {
    return (
      <View>
        <Text> Camera Screen </Text>
      </View>
    );
  }
}
