import { GoogleSignin } from '@react-native-community/google-signin';
import React from 'react';
import { Button } from 'react-native';
import auth from '@react-native-firebase/auth';


GoogleSignin.configure({
    webClientId: '663648135516-rdstleijg0nm1n8o573mi60q4e1uhjh1.apps.googleusercontent.com',

  });
  

function GoogleSignIn() {
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(() => console.log('Signed in with Google!'))}
    />
  );
}



async function onGoogleButtonPress() {
  // Get the users ID token
  const { idToken } = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
}