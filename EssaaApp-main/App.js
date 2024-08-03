// App.js
import React from 'react';
import TabNavigator from './Navigator/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
export default function App() {
  return (
    <>
    <NavigationContainer>
    <TabNavigator />
    </NavigationContainer>
    </>
  );
}
