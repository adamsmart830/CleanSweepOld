import React from 'react';
import { View, Text, Image, StyleSheet, StatusBar } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Set the status bar settings */}
      <StatusBar backgroundColor="#82B04D" barStyle="light-content" />
      
      <Image
        source={require('../assets/CleanSweep-logos.jpeg')}
        style={styles.logo}
      />
      <Text style={styles.title}>Why Not Change the World?</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82B04D',
  },
  logo: {
    width: 500, // Adjust the size as needed
    height: 500, // Adjust the size as needed
    resizeMode: 'contain',
  },
  title: {
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
  },
});
