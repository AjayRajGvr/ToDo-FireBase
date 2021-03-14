import React, {useState} from 'react';
import {Image, Text, TextInput, TouchableOpacity,Button, View} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './styles';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native';
import  Firebase  from '../../firebase/config';


export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  //functions

  const navigation = useNavigation();

  const onFooterLinkPress = () => {
    navigation.navigate('Registration')
  };

  const onLoginPress = () => {
  

        Firebase.auth()
            .signInWithEmailAndPassword(email,password)
            .then(() => navigation.navigate('Home'))
            .catch(error => alert(error))
  };

  //html render

  return (
    <View style={styles.container}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <Image styles={styles.logo} source={require('../../../assets/icon.png')} />

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={(text) => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />

        <TouchableOpacity style={styles.button} onPress={onLoginPress}>
          <Text style={styles.buttonTitle}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Home')}>
          <Text style={styles.buttonTitle}>Skip Log In</Text>
        </TouchableOpacity>

        <View style={styles.footerView}>
          <Text style={styles.footerText}>
            Don't have an account?{' '}
            <Text onPress={onFooterLinkPress} style={styles.footerLink}>
              Sign up
            </Text>
          </Text>
        </View>
      </KeyboardAwareScrollView>
      <View style={{position:'absolute',left:0,right:0,bottom:0,flex:0.1}}>
      <Button onPress={()=> navigation.navigate('About')} title='About'/>
  </View>
    </View>
  );
}
