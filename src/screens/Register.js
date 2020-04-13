import React, { useState } from 'react';
import { View, Text, TextInput, Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    maxWidth: width,
    maxHeight: height,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 10,
  },
  inputForm: {
    width: width * 0.9,
    height: 50,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingLeft: 10,
    paddingBottom: 5,
    marginBottom: 10,
  },
  form: {
    width,
    marginHorizontal: 40,

    maxHeight: height * 0.6,

    backgroundColor: 'red',
  },
});

function InputForm({ placeholder, onChangeText, value }) {
  return (
    <TextInput
      keyboardAppearance="dark"
      style={styles.inputForm}
      placeholder={placeholder}
      autoCapitalize="none"
      value={value}
      onChangeText={v => onChangeText(v)}
    />
  );
}

function Form({ children }) {
  return <View style={styles.form}>{children}</View>;
}

export default function Register(props) {
  const [email, setEmail] = useState('');
  // const [name, setName] = useState('');

  const emailOnChange = item => {
    setEmail(item);
  };
  // const nameOnChange = item => {
  //   setName(item);
  // };
  return (
    <View style={styles.container}>
      <Form>
        <InputForm
          placeholder="Ingrese su email"
          onChangeText={emailOnChange}
          value={email}
        />
      </Form>
      {/* <InputForm
        placeholder="Ingrese su nombre completo"
        onChangeText={nameOnChange}
        value={name}
      /> */}
      {/* <InputForm placeholder="Username" onChange={usernameOnChange}/>
      <InputForm placeholder="Password" onChange={passOnChange}/> */}
    </View>
  );
}
