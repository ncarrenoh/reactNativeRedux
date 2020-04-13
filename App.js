import React, { useState, useEffect } from 'react';
import { Text, View, TextInput, TouchableOpacity } from 'react-native';

export default () => {
  const [nombre, setNombre] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.texto}>Mi Nombre es: {nombre}</Text>
      <TextInput placeholder="Nuevo Nombre"/>
      <TouchableOpacity><Text>
        CHANGE NAME  
      </Text></TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
  texto: {
    fontSize: 15,
    fontWeight: '500',
  }
}