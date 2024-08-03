import React, { useState, useRef } from 'react';
import { StatusBar, Image, View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Dimensions, Linking } from 'react-native'; // Import Linking
import image1 from '../assets/hpw3Logo.jpg';
import image2 from '../assets/pmcImg.jpeg';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function DetailWebsite() {
  const { navigate } = useNavigation();

  const handleImageClick = () => {
    navigate('DetailWebsite');
  };

  const [webviewUrl, setWebviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const webViewRef = useRef(null);

  const handleImageClicks = (uri) => {
    setWebviewUrl(uri);
    setLoading(true);
  };

  const handleOpenLink = (uri) => {
    Linking.openURL(uri)
      .then(() => setLoading(false))
      .catch(() => setLoading(false));
  };

  const handleWebViewLoad = () => {
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      {webviewUrl ? (
        <>
          <WebView
            ref={webViewRef}
            source={{ uri: webviewUrl }}
            style={styles.webview}
            onLoad={handleWebViewLoad}
          />
          {loading && (
            <View style={styles.loader}>
              <ActivityIndicator size="large" color="yellow" />
            </View>
          )}
        </>
      ) : (
        <>
          <Text style={styles.header}>Select the App</Text>
          <View style={styles.imageContainer}>
            <View style={styles.column}>
              <TouchableOpacity onPress={handleImageClick}>
                <Image
                  source={image1}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.column}>
              <TouchableOpacity onPress={() => handleOpenLink('https://www.propertymanagementconcept.com/pmc/')}> 
                <Image
                  source={image2}
                  style={styles.image}
                />
              </TouchableOpacity>
            </View>
          </View>
          <StatusBar backgroundColor="black" barStyle="light-content" />
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191925', // Set the background color to black
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.1,
  },
  header: {
    fontSize: width < 375 ? 25 : 25,
    fontWeight: '700',
    marginBottom: height * 0.02,
    textAlign: 'center',
    marginTop: height * 0.02,
    color: 'white', // Set the text color to white
  },
  imageContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: height * 0.02,
  },
  column: {
    alignItems: 'center',
  },
  image: {
    width: width * 0.6,
    height: height * 0.3,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: height * 0.02,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  webview: {
    flex: 1,
  },
});
