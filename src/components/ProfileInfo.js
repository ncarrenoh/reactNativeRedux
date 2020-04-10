import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

const ProfileInfo = props => (
  <>
    <View style={styles.imageContainer}>
      <Image
        source={require('../assets/2.png')}
        resizeMode="stretch"
        borderRadius={50}
        style={styles.image}
      />
    </View>
    <View style={styles.content}>
      <View>
        <Text style={styles.topText}>1000</Text>
        <Text style={styles.text}>Publica..</Text>
      </View>
      <View>
        <Text style={styles.topText}>2500</Text>
        <Text style={styles.text}>Seguidores</Text>
      </View>
      <View>
        <Text style={styles.topText}>1200</Text>
        <Text style={styles.text}>Seguidos</Text>
      </View>
    </View>
  </>
);

const styles = StyleSheet.create({
  imageContainer: { flex: 1, paddingRight: 20 },
  image: { width: 100, height: 100 },
  content: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topText: {
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Arial',
  },
  text: {
    fontFamily: 'Arial',
    fontWeight: '200',
    fontSize: 16,
  },
});

export default ProfileInfo;
