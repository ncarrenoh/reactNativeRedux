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
    const { doLogin, fetchPosts } = this.props;
    const { placeholderUser, placeholderPassword } = this.state;
    this.setState({ title: ' ...cargando' });
    doLogin(placeholderUser, placeholderPassword);
    fetchPosts();
  };

  _handleOnChangeUserName(value) {
    this.setState({ placeholderUser: value });
  }

  _handleOnChangePassword(value) {
    this.setState({ placeholderPassword: value });
  }

  render() {
    const { title, disabled } = this.state;
    return (
      <View>
        <ImageBackground
          source={require('../assets/home-background.jpg')}
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
                autoCapitalize="none"
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
                autoCapitalize="none"
              />
            </View>
            <TouchableOpacity
              style={{
                width: 300,
                height: 50,
                justifyContent: 'center',
                borderColor: 'white',
                borderWidth: 1,
              }}
              onPress={this._handleOnPressTitle}
              disabled={disabled}>
              <Text
                style={{
                  textAlign: 'center',
                  color: '#fff',
                  fontWeight: '600',
                  fontSize: 20,
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
  doLogin: (username, password) => dispatch(actions.user.login(username, password)),
  fetchPosts: () => dispatch(actions.posts.fetchPosts()),
});

const mapStateToProps = state => ({
  user: state.user,
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login);
