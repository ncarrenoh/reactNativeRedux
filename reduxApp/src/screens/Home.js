import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../store';
import { Card, CardItem, Body } from 'native-base';

class Home extends Component {
  constructor(props) {
    super(props);
    const { data } = this.props.posts;
    this.state = {
      data,
    };
  }

  _renderList = ({ item }) => {
    console.log('data', item);
    return (
      <View style={{ flex: 1, alignItems: 'center' }}>
        <Card>
          <CardItem cardBody>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: `${item.thumbnailUrl}` }}
            />
          </CardItem>
        </Card>
      </View>
    );
  };

  render() {
    const { data } = this.state;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItem: 'center' }}>
        <FlatList data={data} renderItem={this._renderList} />
      </View>
    );
  }
}

// const mapDispatchToProps = dispatch => ({
//   fetchPosts: () => dispatch(actions.posts.fetchPosts()),
// });

const mapStateToProps = state => ({
  posts: state.post,
});

export default connect(
  mapStateToProps,
  null,
)(Home);
