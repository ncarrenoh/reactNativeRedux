import React, { useState, useEffect } from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { connect } from 'react-redux';
import { actions } from '../store';
const { width } = Dimensions.get('window');

const Profile = ({ navigation, posts, updatePost, post }) => {
  const [showAllText, setShowAllText] = useState(3);
  const [show, setShow] = useState(true);

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
      <View style={{ flex: 1, alignItems: 'stretch', padding: 0 }}>
        <TouchableOpacity onPress={() => _handleOnPressImage(item)}>
          <Image
            resizeMode="stretch"
            source={{ uri: `${item.thumbnailUrl}` }}
            style={{ width: width * 0.33, height: 120 }}
          />
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View
          style={{
            flex: 2,
            flexDirection: 'row',
            padding: 10,
            alignItems: 'center',
          }}>
          <View style={{ flex: 1, paddingRight: 20 }}>
            <Image
              source={require('../assets/2.png')}
              resizeMode="stretch"
              borderRadius={50}
              style={{ width: 100, height: 100 }}
            />
          </View>
          <View
            style={{
              flex: 3,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Arial',
                }}>
                1000
              </Text>
              <Text
                style={{
                  fontFamily: 'Arial',
                  fontWeight: '200',
                  fontSize: 16,
                }}>
                Publica..
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Arial',
                }}>
                2500
              </Text>
              <Text
                style={{
                  fontFamily: 'Arial',
                  fontWeight: '200',
                  fontSize: 16,
                }}>
                Seguidores
              </Text>
            </View>
            <View>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '600',
                  fontFamily: 'Arial',
                }}>
                1200
              </Text>
              <Text
                style={{
                  fontFamily: 'Arial',
                  fontWeight: '200',
                  fontSize: 16,
                }}>
                Seguidos
              </Text>
            </View>
          </View>
        </View>
        <View style={{ flex: 8 }}>
          <View style={{ padding: 20 }}>
            <View style={{ flex: 1 }}>
              <Text>Name</Text>
            </View>
            <View style={{ flex: 2 }}>
              <Text
                numberOfLines={showAllText}
                ellipsizeMode="tail"
                style={{
                  fontWeight: '400',
                  fontSize: 16,
                  fontFamily: 'Arial',
                }}>
                Chileno Desarrollador Redux React Native React Navigation
              </Text>
              {show ? (
                <Text
                  style={{
                    fontWeight: '600',
                    fontSize: 16,
                    fontFamily: 'Arial',
                  }}
                  onPress={() => {
                    setShow(!show);
                    setShowAllText(null);
                  }}>
                  ...
                </Text>
              ) : null}
            </View>
            <View style={{ flex: 1, paddingVertical: 20 }}>
              <TouchableOpacity
                onPress={_handleOnPressEditProfile}
                style={{
                  borderRadius: 5,
                  boderColor: '#e8e8e8',
                  borderWidth: 0.25,
                  width: null,
                  height: 30,
                  backgroundColor: '##ffffff',
                  shadowOpacity: 0.1,
                  justifyContent: 'center'
                }}>
                <Text
                  style={{
                    textAlign: 'center',
                    fontWeight: '400',
                    fontFamily: 'Arial',
                    fontSize: 16,
                  }}>
                  {' '}
                  Editar Perfil{' '}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View style={{ flex: 1, flexDirection: 'row' }}>
              <Text> Aqui van las historias </Text>
            </View>
            <View>
              <Text style={{ flex: 1 , flexDirection: 'row'}}> Aqui van dos iconos </Text>
            </View>
            <View style={{ flex: 3, padding: 0, margin: 0 }}>
              <FlatList
                data={posts}
                numColumns={3}
                renderItem={renderImageContent}
                columnWrapperStyle={{ paddingVertical: 2, paddingHorizontal: 0 }}
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

const mapStateToProps = state => ({
  posts: state.post.data,
  post: state.app.post,
});

const mapDispatchToProps = dispatch => ({
  updatePost: (type, data) => dispatch(actions.app.updatePost(type, data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Profile);
