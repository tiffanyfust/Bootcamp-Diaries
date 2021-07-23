// firebase.js
import firebase from 'firebase/app';
import 'firebase/database';

// initialize firebase
    const firebaseConfig = {
    apiKey: "AIzaSyDB-n3dw4K6x1w7K2n48mhtL51WdZ_6KMg",
    authDomain: "u-2-write-a2e1d.firebaseapp.com",
    databaseURL: "https://u-2-write-a2e1d-default-rtdb.firebaseio.com",
    projectId: "u-2-write-a2e1d",
    storageBucket: "u-2-write-a2e1d.appspot.com",
    messagingSenderId: "805184874622",
    appId: "1:805184874622:web:c0d63bdd95a399254fd02f"

  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  // export the configured version of firebase
  export default firebase;