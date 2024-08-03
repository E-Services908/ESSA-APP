import React from 'react';
import { createStackNavigator  } from '@react-navigation/stack';
import DetailWebsite from '../Screen/DetailWebsite';
import Details from '../Screen/Details';
import Onboarding from '../Screen/Onboarding';
import WriteBlogScreen from '../Screen/Blog';
import WriteBlog from '../Screen/Blogwriting';
const Stack = createStackNavigator();

const AppStack = () => {
  return (
    
        <Stack.Navigator initialRouteName="Onboarding" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Onboarding"  component={Onboarding} />
        <Stack.Screen name="Blog"  component={WriteBlogScreen} />
        <Stack.Screen name="WriteBlog"  component={WriteBlog} />
        <Stack.Screen name="DetailWebsite"   component={DetailWebsite} />
        <Stack.Screen name="Details"   component={Details} />
        </Stack.Navigator>
      
  );
};

export default AppStack;
