import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
  TextInput,
} from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../store';

const { width, height } = Dimensions.get('window');

class Login extends Component {
  state = {
    title: ' LOG IN ',
    disabled: false,
    placeholderUser: 'Ingrese nombre de usuario',
    placeholderPassword: 'Ingrese su password',
  };

  _handleOnPressTitle = () => {
    const { login, fetchPosts } = this.props;
    const { placeholderUser, placeholderPassword } = this.state;
    this.setState({ title: ' ...cargando' });
    login(placeholderUser, placeholderPassword);
    fetchPosts();
  };

  _handleOnChangeUserName(value) {
    this.setState({ placeholderUser: value });
  }

  _handleOnChangePassword(value) {
    this.setState({ placeholderPassword: value });
  }

  componentDidUpdate(prevProps, prevState) {
    const { currentUser, navigation } = this.props;
    if (prevProps.currentUser !== currentUser && currentUser) {
      navigation.navigate('Home');
    }
  }

  render() {
    const { title, disabled } = this.state;
    console.log('propiedades del componente', this.props);
    return (
      <View>
        <ImageBackground
          source={require('../assets/loginAppImage.jpg')}
          style={{ width, height }}>
          <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View
              style={{
                width: width * 0.9,
                height: height * 0.4,
                paddingTop: 60,
              }}>
              <TextInput
                style={{
                  width: width * 0.9,
                  height: 50,
                  borderBottomWidth: 1,
                  borderBottomColor: '#fff',
                  color: '#fff',
                }}
                clearTextOnFocus
                value={this.state.placeholderUser}
                onChangeText={v => this._handleOnChangeUserName(v)}
              />
              <View style={{ margin: 30 }} />
              <TextInput
                style={{
                  width: width * 0.9,
                  height: 50,
                  borderBottomWidth: 1,
                  borderBottomColor: '#fff',
                  color: '#fff',
                }}
                clearTextOnFocus
                value={this.state.placeholderPassword}
                onChangeText={v => this._handleOnChangePassword(v)}
                secureTextEntry
              />
            </View>
            <TouchableOpacity
              style={{
                width: 300,
                height: 50,
                backgroundColor: '#aaa',
                justifyContent: 'center',
              }}
              onPress={this._handleOnPressTitle}
              disabled={disabled}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: '600',
                }}>
                {title}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (username, password) =>
    dispatch(actions.user.login(username, password)),
  fetchPosts: () => dispatch(actions.posts.fetchPosts()),
});

const mapStateToProps = state => ({
  currentUser: state.user.currentUser,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
