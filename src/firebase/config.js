import * as firebase from 'firebase'
import '@firebase/auth'
import '@firebase/firestore'

const firebaseConfig ={
    apiKey: 'AIzaSyCMORKhDqxQ5ndcBa1rifvvIcOWlk-bwu4',
    authDomain: 'your-auth-domain-b1234.firebaseapp.com',
    databaseURL: 'https://your-database-name.firebaseio.com',
    projectId: 'auth-react-native1994',
    storageBucket: 'auth-react-native1994.appspot.com',
    messagingSenderId: '920144316307',
    appId: '1:920144316307:android:31a2c28462e2fc9f890a66',
  };

  if(!firebase.apps.length){
      firebase.initializeApp(firebaseConfig);
  }

  export {firebase};