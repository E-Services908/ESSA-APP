import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Onboarding() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/logo.jpeg')} style={styles.logo} />
      </View>
      <Text style={styles.onboardingText}>Join The</Text>
      <Text style={styles.ultimateText}>Ultimate</Text>
      <Text style={styles.esa}>ESA+</Text>
      <Text style={styles.expediteText}>Expedite Spend less</Text>
      <Text style={styles.spendLessText}>Achieve More</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        onPress={() => navigation.navigate('Details')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191925',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    marginTop: 30,
  },
  logo: {
    width: 200,
    height: 200,
    borderRadius: 20,
  },
  onboardingText: {
    fontSize: width < 375 ? 25 : 40,
    fontWeight: '900',
    color: 'white',
    textAlign: 'center',
    marginVertical: 10,
  },
  ultimateText: {
    fontSize: width < 375 ? 20 : 25,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  esa: {
    fontSize: width < 375 ? 16 : 20,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
  },
  expediteText: {
    fontSize: width < 375 ? 16 : 19,
    fontWeight: 'bold',
    color: '#E6C401',
    textAlign: 'center',
  },
  spendLessText: {
    color: '#E6C401',
  },
  getStartedButton: {
    backgroundColor: '#FFD700',
    borderRadius: 10,
    padding: 10,
    marginVertical: 20,
  },
  buttonText: {
    color: 'black',
    fontSize: width < 375 ? 20 : 24,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
