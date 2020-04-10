import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
  StyleSheet,
} from 'react-native';
import { Icon } from 'native-base';
import { connect } from 'react-redux';
import { actions } from '../store';
import ProfileInfo from '../components/ProfileInfo';

const { width } = Dimensions.get('window');

const Profile = ({ navigation, route, posts, updatePost, post, user }) => {
  const [showAllText, setShowAllText] = useState(3);
  const [show, setShow] = useState(true);
  let [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    if (!route.params?.name) {
      navigation.setParams({
        name: user.name,
      });
    }
  }, [route.params?.name]);

  const _handleOnPressEditProfile = () => {
    navigation.navigate('Settings');
  };

  const _handleOnPressImage = item => {
    updatePost('id', item.id);
    navigation.navigate('Posts');
  };

  // useEffect(() => {
  //   post.id ? navigation.navigate('Posts') : null;
  //   //eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [post]);

  const renderImageContent = ({ item }) => {
    return (
      <View style={styles.imageContainer}>
        <TouchableOpacity onPress={() => _handleOnPressImage(item)}>
          <Image
            resizeMode="stretch"
            source={{ uri: `${item.thumbnailUrl}` }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const FlatListHeader = () => (
    <View
      style={{
        flex: 1,
        position: scrolling ? 'absolute' : 'relative',
        width: width,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-around',
        top: 0,
        padding: 10,
      }}>
      <Icon
        name="account"
        type="MaterialCommunityIcons"
        style={{ fontSize: 40 }}
        onPress={() => console.log('pressed Left Icon')}
      />
      <Icon
        name="comment-account-outline"
        type="MaterialCommunityIcons"
        style={{ fontSize: 40 }}
        onPress={() => console.log('pressed Right Icon')}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.profileInfo}>
          <ProfileInfo />
        </View>
        <View style={styles.main}>
          <View style={{ padding: 20 }}>
            <View style={{ flex: 1 }}>
              <Text>{user.name}</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text
                numberOfLines={showAllText}
                ellipsizeMode="tail"
                style={styles.textProfileDescription}>
                Chileno Desarrollador Redux React Native React Navigation
              </Text>
              {show ? (
                <Text
                  style={styles.textDots}
                  onPress={() => {
                    setShow(!show);
                    setShowAllText(null);
                  }}>
                  ...
                </Text>
              ) : null}
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity
                onPress={_handleOnPressEditProfile}
                style={styles.buttonEditProfile}>
                <Text style={styles.textButton}> Editar Perfil</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={styles.historyContainer}>
              <Image
                source={require('../assets/2.png')}
                resizeMode="stretch"
                borderRadius={50}
                style={styles.imageHistory}
              />
              <Image
                source={require('../assets/2.png')}
                resizeMode="stretch"
                borderRadius={50}
                style={styles.imageHistory}
              />
              <Image
                source={require('../assets/2.png')}
                resizeMode="stretch"
                borderRadius={50}
                style={styles.imageHistory}
              />
            </View>
            <View style={{ flex: 3, padding: 0, margin: 0 }}>
              <FlatList
                ListHeaderComponent={FlatListHeader}
                ListHeaderComponentStyle={{position: 'absolute', top: 0}}
                data={posts}
                numColumns={3}
                renderItem={renderImageContent}
                columnWrapperStyle={{
                  paddingVertical: 2,
                  paddingHorizontal: 0,
                }}
                onScrollToTop={() => console.log('escroll Top')}
                onScroll={e => console.log('escrolling', e)}
                maxToRenderPerBatch={6}
                keyExtractor={item => item.id.toString()}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  profileInfo: {
    flex: 2,
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  main: { flex: 8 },
  buttonEditProfile: {
    borderRadius: 5,
    borderColor: '#e8e8e8',
    borderWidth: 0.25,
    width: null,
    height: 30,
    backgroundColor: '#ffffff',
    shadowOpacity: 0.1,
    justifyContent: 'center',
  },
  textButton: {
    textAlign: 'center',
    fontWeight: '400',
    fontFamily: 'Arial',
    fontSize: 16,
  },
  textProfileDescription: {
    fontWeight: '400',
    fontSize: 16,
    fontFamily: 'Arial',
  },
  imageContainer: { flex: 1, alignItems: 'stretch', padding: 0 },
  buttonContainer: { flex: 1, paddingVertical: 20 },
  textDots: {
    fontWeight: '600',
    fontSize: 16,
    fontFamily: 'Arial',
  },
  image: { width: width * 0.33, height: 120 },
  imageHistory: { width: 100, height: 100 },
  historyContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingBottom: 10,
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
});

const mapStateToProps = state => ({
  posts: state.post.data,
  post: state.app.post,
  user: state.user,
});

const mapDispatchToProps = dispatch => ({
  updatePost: (type, data) => dispatch(actions.app.updatePost(type, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
