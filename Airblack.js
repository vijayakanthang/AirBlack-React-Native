import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import top from './assets/ab.jpg';
import certificateImage from './assets/image.png';

const Airblack = () => {
  const [name, setName] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [profession, setProfession] = useState('');
  const [goal, setGoal] = useState('');
  const [city, setCity] = useState('');

  const handleSubmit = () => {
    console.log({ name, whatsapp, profession, goal, city });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={top} style={styles.image} />
      <Text style={styles.header}>Professional Online Makeup Course</Text>
      <View style={styles.ct}>
      <Text style={styles.subHeader}>Certification Programme</Text>
      <Text style={styles.rating}>Rated 4.85/5</Text>
      </View>
      <Text style={styles.text}>India's No.1 Online Makeup Course</Text>
      <Text style={styles.text}>Learn via LIVE Do-it-Together Classes</Text>
      <Text style={styles.text}>Unlimited Practice Sessions to master skills</Text>

      <Text style={styles.formhead}>FILL THE FORM BELOW TO ENQUIRE</Text>
      <View style={styles.form}>
        <Text>*Enter your name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Text>*Enter your WhatsApp Number</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter your WhatsApp Number"
          keyboardType="phone-pad"
          value={whatsapp}
          onChangeText={setWhatsapp}
        />

        <Text>* Select your profession</Text>
        <RNPickerSelect
          onValueChange={(value) => setProfession(value)}
          items={[
            { label: 'Student', value: 'student' },
            { label: 'Professional', value: 'professional' },
            { label: 'Other', value: 'other' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Select your profession',
            value: null,
          }}
        />
        <Text>*Select your goal</Text>
        <RNPickerSelect
          onValueChange={(value) => setGoal(value)}
          items={[
            { label: 'Learn makeup', value: 'learn_makeup' },
            { label: 'Start a career', value: 'start_career' },
            { label: 'Improve skills', value: 'improve_skills' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Select your goal',
            value: null,
          }}
        />
        <Text>*Select your city</Text>
        <RNPickerSelect
          onValueChange={(value) => setCity(value)}
          items={[
            { label: 'Mumbai', value: 'mumbai' },
            { label: 'Delhi', value: 'delhi' },
            { label: 'Bangalore', value: 'bangalore' },
          ]}
          style={pickerSelectStyles}
          placeholder={{
            label: 'Select your city',
            value: null,
          }}
        />
        <TouchableOpacity onPress={handleSubmit} style={styles.button}>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.footerText}>Join our growing community of 35,000+ alumni</Text>

      <View style={styles.section}>
        <Text style={styles.title}>Why Should You Join Airblack?</Text>
        <View style={styles.iconsContainer}>
          <View style={styles.iconBox}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/7044/7044622.png'}} style={styles.socialIcon} />
            <Text style={styles.iconText}>Do-it-together, live on zoom</Text>
          </View>
          <View style={styles.iconBox}>
          <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/12634/12634252.png'}} style={styles.socialIcon} />
            <Text style={styles.iconText}>4.8 / 5 Rated Classes</Text>
          </View>
          <View style={styles.iconBox}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/128/8320/8320649.png'}} style={styles.socialIcon} />
            <Text style={styles.iconText}>35000+ Members</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>

      {/* Certification Section */}
      <View style={styles.section}>
        {/* <Text style={styles.title}>Get Certified From India's Biggest Beauty Platform</Text> */}
        <Image 
          source={certificateImage} 
          style={styles.certificateImage} 
        />
      </View>

      {/* Alumni Section */}
      <View style={styles.section}>
        <Text style={styles.title}>Join our growing community of 35,000+ alumni</Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Apply Now</Text>
        </TouchableOpacity>
      </View>

      {/* Social Media Links */}
      <View style={styles.socialMediaContainer}>
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/15707/15707749.png'}} style={styles.socialIcon} />
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/5968/5968764.png'}} style={styles.socialIcon} />
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/145/145807.png'}} style={styles.socialIcon} />
        <Image source={{uri: 'https://cdn-icons-png.flaticon.com/128/3670/3670151.png'}} style={styles.socialIcon} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    padding: 20,
    backgroundColor: 'black',
  },
  image: {
    width: "100%",
    height: 130,
    resizeMode: 'cover',
  },
  form: {
    padding:10,
    backgroundColor: "white",
    borderBottomRightRadius:10,
    borderBottomLeftRadius:10,
    
  },
  formhead: {
    padding: 5,
    paddingHorizontal:10,
    backgroundColor: '#ff55a3',
    color: 'white',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    textAlign: "center",
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  ct: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 15,
  },
  subHeader: {
    padding: 10,
    paddingHorizontal:17,
    backgroundColor: "gray",
    borderRadius: 20,
    fontSize: 18,
    textAlign: "center",
    color: 'white',
    marginTop:10,
    marginBottom: 15,

  },
  rating: {
    marginTop:10,
    padding: 10,
    textAlign: "center",
    fontSize: 16,
    color: 'gold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    color: 'white',
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  footerText: {
    marginTop: 20,
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  section: { 
    marginBottom: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  iconsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  iconBox: {
    alignItems: 'center',
    width: '30%',
  },
  iconText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
  },
  button: {
    backgroundColor: '#ff69b4',
    padding: 15,
    borderRadius: 5,
  },
  buttonText: {
    textAlign: "center",
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  certificateImage: {
    width: "100%",
    height: 450,
    resizeMode: "stretch",
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

const pickerSelectStyles = {
  inputIOS: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
  },
  inputAndroid: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 10,
    marginBottom: 10,
    paddingHorizontal: 10,
    color: 'black',
    
  },
};

export default Airblack;
