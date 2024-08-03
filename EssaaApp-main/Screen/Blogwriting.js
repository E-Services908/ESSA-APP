import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TextInput, Button, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome'; // Import the icon library

const { width, height } = Dimensions.get('window');

const WriteBlogScreen = () => {
  const navigation = useNavigation();
  const [blogData, setBlogData] = useState({
    name: '',
    title: '',
    image: '',
    content: '',
  });

  const handleBlogSubmit = () => {
    // Implement your blog submission logic here
    // You can access the blog data from the blogData state
    // For example: console.log(blogData);
  };

  return (
    <ScrollView style={styles.container}>
      
      <Text style={styles.onboardingText}>
        <Icon name="edit" size={30} color="white" /> Create a New Blog
      </Text>
      <Image source={require('../assets/logo.jpeg')} style={styles.logo} /> 
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={blogData.name}
        onChangeText={(text) => setBlogData({ ...blogData, name: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Title"
        value={blogData.title}
        onChangeText={(text) => setBlogData({ ...blogData, title: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Image URL"
        value={blogData.image}
        onChangeText={(text) => setBlogData({ ...blogData, image: text })}
      />
      <TextInput
        style={styles.input}
        placeholder="Content"
        multiline={true}
        numberOfLines={4}
        value={blogData.content}
        onChangeText={(text) => setBlogData({ ...blogData, content: text })}
      />
      <TouchableOpacity
        style={styles.getStartedButton}
        //onPress={handleBlogSubmit}
        onPress={() => navigation.navigate('Blog')}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Submit</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191925',
    padding: 14,
  },
  logo: {
    width: 400, // Adjust the width and height as needed
    height: 200,
    alignSelf: 'center', // Center the logo horizontally
    marginBottom: 20, // Add some margin between the logo and heading
  },
  onboardingText: {
    fontSize: width < 375 ? 20 : 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 60,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
  },
  getStartedButton: {
    borderRadius: 10,
    padding: width < 375 ? 8 : 10,
    marginVertical: 10,
    backgroundColor: '#FFD700',
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: width < 375 ? 20 : 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default WriteBlogScreen;
