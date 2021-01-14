import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCccKt4Qu9CzVpfkWVYOEVVRpZlYY6u3Ds",
    authDomain: "clone-873c1.firebaseapp.com",
    projectId: "clone-873c1",
    storageBucket: "clone-873c1.appspot.com",
    messagingSenderId: "849458215413",
    appId: "1:849458215413:web:0ad0d4537983392c2ec8bc",
    measurementId: "G-5Z386WJH00"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { db, auth, provider };