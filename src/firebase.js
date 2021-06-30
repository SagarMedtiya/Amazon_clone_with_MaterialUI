// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDSFnaRwKyF1J6nWf7HR0KzXxE2idK1ctA",
    authDomain: "clone-b3d9d.firebaseapp.com",
    projectId: "clone-b3d9d",
    storageBucket: "clone-b3d9d.appspot.com",
    messagingSenderId: "919931161453",
    appId: "1:919931161453:web:5aa45bbfc94889ae5b2864",
    measurementId: "G-EE56EKY5DW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth};