import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    width,
    maxHeight: height,
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    margin: 10,
  },
  inputForm: {
    width,
    height: 50,
  },
});

function InputForm({ placeholder, onChange, value }) {
  return (
    <TextInput
      style={styles.inputForm}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

export default function Register(props) {
  const [email, setEmail] = useState('');

  const emailOnChange = ({ item }) => {
    setEmail(item);
  };
  return (
    <View style={styles.container}>
      <InputForm placeholder="Email" onChange={emailOnChange} value={email} />
      {/* <InputForm placeholder="FullName" onChange={nameOnChange}/>
      <InputForm placeholder="Username" onChange={usernameOnChange}/>
      <InputForm placeholder="Password" onChange={passOnChange}/> */}
    </View>
  );
}
