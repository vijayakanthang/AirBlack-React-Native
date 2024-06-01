// App.js
import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './HomePage';
import Airblack from './Airblack';
import { StatusBar } from 'react-native';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
    <StatusBar/>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomePage} options={{ title: 'Home',headerShown: false }} />
        <Stack.Screen name="Main" component={Airblack} options={{ title: 'Detail' ,headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </>
  );
};

export default App;
