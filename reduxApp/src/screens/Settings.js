import React from 'react';
import { Container, Content, Text } from 'native-base';

const Settings = ({ navigation }) => (
  <Container>
    <Content>
      <Text onPress={() => navigation.navigate('Login')}>Settings!!!!!!</Text>
    </Content>
  </Container>
);

export default Settings;
