import React from 'react';
import { View, StyleSheet } from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'; // import Marker

export default function FindCleanup({ navigation }) {

  // Specify the coordinates for your marker
  const markerCoordinates = {
    latitude: 42.7298,
    longitude: -73.6789,
  };

  return (
    <View style={styles.container}>
      <MapView
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}
        initialRegion={{
          latitude: 42.7298, // Your current latitude
          longitude: -73.6789, // Your current longitude
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        {/* Add Marker */}
        <Marker
          coordinate={markerCoordinates}
          title="Point of Interest" // Optional title to show when the marker is tapped
          description="This is where we need to clean up." // Optional description
        />
      </MapView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});