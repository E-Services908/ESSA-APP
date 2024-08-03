import React from 'react';
import {
  TouchableOpacity,
  View,
  Text,
  Linking,
  StyleSheet,
  Share,
  Dimensions,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppStack from './AppStack';

const { width } = Dimensions.get('window');
const Tab = createBottomTabNavigator();

const createTabScreen = (name, label, iconName, onPress) => {
  return {
    name,
    component: AppStack,
    options: {
      tabBarLabel: label,
      tabBarLabelStyle: styles.tabLabel,
      tabBarButton: ({ onPress }) => (
        <TouchableOpacity style={styles.tabButton} onPress={onPress}>
          <Ionicons name={iconName} size={22} color="black" />
          <Text style={styles.tabText}>{label}</Text>
        </TouchableOpacity>
      ),
      headerShown: false,
    },
  };
};

const openLink = (phoneNumber, linkType) => {
  const url = `${linkType}:${phoneNumber}`;
  Linking.openURL(url).then(() => {}).catch(() => {});
};

const shareAppLink = async () => {
  try {
    const result = await Share.share({
      message: 'https://your-app-link.com',
    });
  } catch (error) {
    console.log(error.message);
  }
};

const TabNavigator = () => {
  const navigation = useNavigation();

  const tabScreens = [
    createTabScreen('Onboarding', 'Home', 'home', () => navigation.navigate('Onboarding')),
    createTabScreen('Blogs', 'Blogs', 'information-circle', () => navigation.navigate('Blog')),
    createTabScreen('WhatsApp', 'WhatsApp', 'logo-whatsapp', () => openLink('+1(301)6060756', 'whatsapp')),
    createTabScreen('ContactUs', 'Contact Us', 'call', () => openLink('+1(301)6060756', 'tel')),
    createTabScreen('Share', 'Share', 'share-social', shareAppLink),
  ];

  return (
    <Tab.Navigator
      initialRouteName="Onboarding"
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          // ...
        },
        tabBarActiveTintColor: '#E6C401',
        tabBarInactiveTintColor: 'gray',
      })}
      tabBarOptions={{
        style: styles.tabBar,
      }}
    >
      {tabScreens.map((screen) => (
        <Tab.Screen key={screen.name} {...screen} />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: 'white',
    elevation: 0,
    shadowOpacity: 10,
    borderTopWidth: 100,
    paddingVertical: 10,
  },
  tabLabel: {
    fontSize: width < 375 ? 8 : 12,
    fontWeight: 'bold',
    color: '#333',
  },
  tabButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 2,
  },
  tabText: {
    fontSize: width < 375 ? 8 : 12,
  },
});

export default TabNavigator;
