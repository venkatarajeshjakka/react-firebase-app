
import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialize Firebase

const config = {
    apiKey: "AIzaSyCcfOwvycI_B-2QMF_iebqPyLkFFdeoTFI",
    authDomain: "react-redux-app-c02e6.firebaseapp.com",
    databaseURL: "https://react-redux-app-c02e6.firebaseio.com",
    projectId: "react-redux-app-c02e6",
    storageBucket: "react-redux-app-c02e6.appspot.com",
    messagingSenderId: "793514294226",
    appId: "1:793514294226:web:58019d163fc6e1ed"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({timestampsInSnapshots: true})

  export default firebase;