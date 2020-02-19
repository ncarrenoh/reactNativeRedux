import React from 'react';
import { Container, Content, Text } from 'native-base';

const Search = ({ navigation }) => (
  <Container>
    <Content>
      <Text onPress={() => navigation.navigate('Login')}>Settings!!!!!!</Text>
    </Content>
  </Container>
);

export default Search;
