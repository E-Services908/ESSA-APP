import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const sampleBlogs = [
  {
    id: 1,
    title: 'Sample Blog 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: require('../assets/Blog1.jpg'),
  },
  {
    id: 1,
    title: 'Sample Blog 1',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    image: require('../assets/Blog2.webp'),
  },// ... Other sample blogs ...
];

const BlogItem = ({ blog }) => {
  return (
    <View style={styles.blogItem}>
      <Image source={blog.image} style={styles.blogImage} />
      <Text style={styles.blogTitle}>{blog.title}</Text>
      <Text style={styles.blogContent}>{blog.content}</Text>
    </View>
  );
};
const BlogsScreen = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.onboardingText}>Community Blogs</Text>
      <TouchableOpacity
        style={styles.getStartedButton}
        underlayColor="#FFD700"
        onPress={() => navigation.navigate('WriteBlog')}
      >
        <View style={styles.buttonContent}>
          <Text style={styles.buttonText}>Create New Blog</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.blogContainer}>
        {sampleBlogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#191925',
    padding: 14,
  },
  onboardingText: {
    fontSize: width < 375 ? 20 : 24,
    fontWeight: 'bold',
    color: 'white',
    marginVertical: 20,
    textAlign: 'center',
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
  blogContainer: {
    marginVertical: 10,
  },
  blogItem: {
    marginBottom: 10,
    borderWidth: 1,
    padding: 10,
  },
  blogImage: {
    width: '100%',
    height: 170,
    resizeMode: 'cover',
  },
  blogTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 10,
  },
  blogContent: {
    fontSize: 16,
    color: 'white',
  },
});

export default BlogsScreen;
