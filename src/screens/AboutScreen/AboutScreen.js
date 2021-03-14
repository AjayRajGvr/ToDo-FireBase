import React from 'react';
import {View,Text} from 'react-native';

 function AboutScreen() {

return (
    <View style={{flex:1,margin:'5%'}}>
    <Text style={{textAlign:'justify',fontSize:25}}>This App allows users to manage their tasks from their Android/IOS phones.{'\n'}
          You can Add and Remove Tasks from the home Screen.{'\n\n'}
          It has an optional Login and Signup funcionality. {'\n\n'}
          You can sign up using Email and password or Using Google Sign in.{'\n\n'}<Text>
          Sign Up using Facebook is under construction and will be availabe shortly .</Text></Text>
</View>

)
}
export default AboutScreen;