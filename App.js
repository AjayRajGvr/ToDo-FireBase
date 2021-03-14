import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react'
import {Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { LoginScreen, HomeScreen, RegistrationScreen } from './src/screens';
//import AboutScreen from './src/screens/AboutScreen/AboutScreen';
import {decode, encode} from 'base-64'
import AboutScreen from './src/screens/AboutScreen/AboutScreen';
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)
  


  return (
    <NavigationContainer>
      <Stack.Navigator>
        { user ? (
          <Stack.Screen name="Home" component={HomeScreen}/>
        ) : (
          <>
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Registration" component={RegistrationScreen} />
            <Stack.Screen name="Home" component={HomeScreen}/>
            <Stack.Screen name="About" component={AboutScreen}/>
         
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}