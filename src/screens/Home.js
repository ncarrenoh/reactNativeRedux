import React, { Component } from 'react';
import { Text, View, Image, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../store';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.posts,
      iconHeartPressed: false,
      loading: true,
    };
  }

  _renderListItem = ({ item }) => {
    return (
      <View
        style={{
          width: '100%',
          borderTopColor: '#ccc',
          borderTopWidth: 1,
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              paddingLeft: 20,
              paddingVertical: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              borderRadius={50}
              source={{ uri: `${item.thumbnailUrl}` }}
              style={{ width: 40, height: 40 }}
            />
            <Text
              style={{
                paddingLeft: 5,
                fontWeight: '600',
                textAlign: 'justify',
                maxWidth: 300,
              }}>
              {item.title}
            </Text>
          </View>
          <View style={{ paddingRight: 20, paddingVertical: 10 }}>
            <Icon
              name="ellipsis-v"
              size={25}
              allowFontScaling
              adjustsFontSizeToFit
            />
          </View>
        </View>
        <View style={{ height: null, width: null }}>
          <Image
            style={{
              height: 600,
              width: '100%',
              paddingTop: 10,
              alignContent: 'stretch',
            }}
            resizeMode="stretch"
            source={{ uri: `${item.thumbnailUrl}` }}
          />
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                flex: 0.4,
                flexDirection: 'row',
                padding: 10,
                justifyContent: 'space-between',
              }}>
              <Icon
                name="heart"
                size={30}
                solid={this.state.iconHeartPressed}
                onPress={() =>
                  this.setState(state => ({
                    iconHeartPressed: !state.iconHeartPressed,
                  }))
                }
              />
              <Icon name="comment" size={30} />
              <Icon name="paper-plane" size={30} />
            </View>
            <View style={{ padding: 10 }}>
              <Icon name="bookmark" size={30} />
            </View>
          </View>
        </View>
      </View>
    );
  };

  componentDidMount() {
    this.props.fetchPosts();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.posts !== this.props.posts) {
      this.setState({ data: this.props.posts, loading: false });
    }
  }
  render() {
    const { loading, data, iconHeartPressed } = this.state;
    if (this.state.loading) {
      return null;
    }
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={data}
          renderItem={this._renderListItem}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  posts: state.post.data,
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(actions.posts.fetchPosts()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Home);
