import React, { Component } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { connect } from 'react-redux';

class Posts extends Component {
  _renderItem = ({ item }) => {
    return (
      <Image
        source={{ uri: `${item.thumbnailUrl}` }}
        style={{ width: null, height: 500 }}
      />
    );
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          initialScrollIndex={this.props.post.id - 1}
          onScrollToIndexFailed={this.props.post.id - 1}
          data={this.props.posts}
          renderItem={this._renderItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.data,
  post: state.app.post,
});

export default connect(
  mapStateToProps,
  null,
)(Posts);
