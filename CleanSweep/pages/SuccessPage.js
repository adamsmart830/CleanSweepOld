import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const SuccessPage = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.successMessage}>Report submitted successfully!</Text>
      <Button
        title="Go Back"
        onPress={() => navigation.goBack()}
        color="#2D3320"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#82B04D'
  },
  successMessage: {
    fontSize: 20,
    color: 'white',
    marginBottom: 20,
  },
});

export default SuccessPage;