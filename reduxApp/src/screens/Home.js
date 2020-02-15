import React, { Component } from 'react';
import { Text, View, Image, FlatList, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../store';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  _renderList = () => {
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        {/* {posts.data.map(item => ( */}
          <Image
            style={{ width: '100%', height: 300 }}
            source={require('../assets/wocReactNativeCourse.png')}
          />
        {/* ))} */}
      </View>
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <ScrollView>{this._renderList()}</ScrollView>
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
