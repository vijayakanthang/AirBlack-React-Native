import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import top from './assets/ab.jpg';  // Make sure to replace this with the actual path to your image

const HomePage = ({navigation}) => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={top} style={styles.image} />
      <Text style={styles.header}>Welcome to Airblack</Text>
      <Text style={styles.subHeader}>Your journey to professional makeup artistry starts here</Text>

      <View style={styles.section}>
        <Text style={styles.title}>About the Course</Text>
        <Text style={styles.text}>
          Airblack offers India's No.1 Online Makeup Course. Learn via live Do-it-Together classes
          and unlimited practice sessions to master your skills. Join our growing community of
          35,000+ alumni.
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText} >Enroll Now</Text>
      </TouchableOpacity>

      <View style={styles.section}>
        <Text style={styles.title}>Why Choose Us?</Text>
        <Text style={styles.text}>
          - Do-it-together, live on Zoom
          {"\n"}- Rated 4.85/5 by students
          {"\n"}- 35,000+ Members
        </Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
        <Text style={styles.buttonText}>Learn More</Text>
      </TouchableOpacity>

      <View style={styles.socialMediaContainer}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/15707/15707749.png' }} style={styles.socialIcon} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png' }} style={styles.socialIcon} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/145/145807.png' }} style={styles.socialIcon} />
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670151.png' }} style={styles.socialIcon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'black',
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textAlign: 'center',
  },
  subHeader: {
    fontSize: 18,
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  section: {
    marginBottom: 30,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#ff69b4',
    padding: 15,
    borderRadius: 5,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  socialMediaContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  socialIcon: {
    width: 40,
    height: 40,
    margin: 10,
  },
});

export default HomePage;
