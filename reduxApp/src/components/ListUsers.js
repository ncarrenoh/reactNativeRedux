import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { connect } from 'react-redux';
import { actions } from '../store';
import { List, ListItem, Container, Content } from 'native-base';

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0,
    };
  }

  componentDidMount() {
    const { getUser } = this.props;
    getUser();
  }

  _renderList = users =>
    Object.keys(users).map(user => {
      return <Text> HOLA </Text>;
    });

  render() {
    const { data } = this.props;
    const { users } = data;
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        {users.map(user => {
          console.log(user);
          return <Text>{user.name}</Text>;
        })}
      </View>
    );
  }
}

const mapStateToProps = state => ({
  data: state.users,
});

const mapDispatchToProps = dispatch => ({
  getUser: () => dispatch(actions.user.getUser()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListUsers);
