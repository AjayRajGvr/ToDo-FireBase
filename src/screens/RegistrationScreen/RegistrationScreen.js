import React,{useState} from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import styles from './registration_styles.css';

export default function RegistrationScreen(){
 
    const [fullname,setFullname]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [confirmPassword,setConfirmPassword]=useState('');


    return(
           <View style={styles.container}>
             <KeyboardAwareScrollView 
               style={{flex: 1,width: '100%'}}
               keyboardShouldPersistTaps='always'>
                   <Image style={styles.logo}
                   source={require('../../assets/icon.png')}
                   />
                  <TextInput
                  style={styles.input}
                  placeholder="Full name"
                  onChangeText={(text)=> setFullname(text)} 
                  value={fullname}
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  />
                  <TextInput
                  style={styles.input}
                  placeholder='Email id'
                  onChangeText={(text)=>setEmail(text)} 
                  value={email}
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  />
                  <TextInput
                  style={styles.input}
                  placeholder='Enter Password'
                  onChangeText={(text)=>setPassword(text)}
                  value={password}
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  />
                  <TextInput
                  style={styles.input}
                  placeholder='Confirm your Password'
                  onChangeText={(text)=>setConfirmPassword(text)}
                  value={confirmPassword}
                  underlineColorAndroid='transparent'
                  autoCapitalize='none'
                  secureTextEntry={true}
                  />
                  <TouchableOpacity style={styles.button} 
                   onPress={()=>onSignUp()}>
                    <Text style={styles.Button}>Sign Up</Text>
                    </TouchableOpacity>

                    



               </KeyboardAwareScrollView>

            </View>
    )

}