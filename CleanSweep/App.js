import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen'; // Adjust the path as necessary
import FindCleanup from './pages/FindCleanup'; // Adjust the path as necessary
import ReportPage from './pages/ReportPage'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#2D3320" barStyle="light-content" />
      <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#2D3320', // Your desired header color
          },
          headerTintColor: '#fff', // Color of header text and icons
          tabBarStyle: {
            backgroundColor: '#2D3320',
          },
          tabBarActiveTintColor: '#FFFFFF',
          tabBarInactiveTintColor: 'gray',
        }}
        >
          <Tab.Screen name="Make a Report" component={ReportPage} /* Other screen options... */ />
          <Tab.Screen name="Home" component={HomeScreen} /* Other screen options... */ />
          <Tab.Screen name="Find Cleanup" component={FindCleanup} /* Other screen options... */ />
        </Tab.Navigator>
      </NavigationContainer>
    </>
  );
}