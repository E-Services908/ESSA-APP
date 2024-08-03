import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, ActivityIndicator, Dimensions, Linking } from 'react-native';
import { WebView } from 'react-native-webview'; // Import WebView from 'react-native-webview'

import usa from '../assets/JobsUSA.jpg';
import africa from '../assets/JobsAfrica.jpg';
import australia from '../assets/JobsAustralia.jpg';
import canada from '../assets/JobsCanada.jpg';
import europe from '../assets/JobsEurope.jpg';

const { width, height } = Dimensions.get('window');
const imageWidth = 170; // Specify the desired image width
const imageHeight = 150; // Specify the desired image height

export default function DetailWebsite() {
  const [webviewUrl, setWebviewUrl] = useState(null);
  const [loading, setLoading] = useState(false);
  const webViewRef = useRef(null);

  const handleImageClick = (uri) => {
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
            style={styles.webView}
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
          <Text style={styles.headerText}>Your Dream Job is Waiting</Text>
          <View style={styles.imageGrid}>
            <View style={styles.imageRow}>
              <TouchableOpacity onPress={() => handleOpenLink("https://healthprofessionalworkerpool.com/hpwp/")}>
                <Image source={usa} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOpenLink('https://healthprofessionalworkerpool.com/hpwp/af/')}>
                <Image source={africa} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
              </TouchableOpacity>
            </View>
            <View style={styles.imageRow}>
              <TouchableOpacity onPress={() => handleOpenLink('https://healthprofessionalworkerpool.com/hpwp/au/')}>
                <Image source={australia} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleOpenLink('https://healthprofessionalworkerpool.com/hpwp/ca/')}>
                <Image source={canada} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
              </TouchableOpacity>
            </View>
            <View style={styles.imageRow}>
              <TouchableOpacity onPress={() => handleOpenLink('https://healthprofessionalworkerpool.com/hpwp/eu/')}>
                <Image source={europe} style={[styles.image, { width: imageWidth, height: imageHeight }]} />
              </TouchableOpacity>
            </View>
          </View>
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191925',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.05,
  },
  headerText: {
    fontSize: width < 375 ? 20 : 24,
    fontWeight: '600',
    marginBottom: height * 0.02,
    textAlign: 'center',
    marginTop: height * 0.02,
    color: 'white',
  },
  imageGrid: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: width * 0.05,
  },
  image: {
    resizeMode: 'cover',
    borderRadius: 8,
    marginHorizontal: width * 0.02,
  },
  webView: {
    flex: 1,
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
});
