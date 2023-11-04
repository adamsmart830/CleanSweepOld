import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './pages/HomeScreen'; // Adjust the path as necessary
import FindCleanup from './pages/FindCleanup'; // Adjust the path as necessary
import ReportPage from './pages/ReportPage'; // Adjust the path as necessary

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
      <Tab.Navigator initialRouteName = "Home">
        <Tab.Screen name="Make a Report" component={ReportPage} />
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Find Cleanup" component={FindCleanup} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}