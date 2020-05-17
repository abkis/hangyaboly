import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCQmRaxs01Njqn2goBjZgdgkv59pfOAM18",
    authDomain: "hangyaboly-honlap.firebaseapp.com",
    databaseURL: "https://hangyaboly-honlap.firebaseio.com",
    projectId: "hangyaboly-honlap",
    storageBucket: "hangyaboly-honlap.appspot.com",
    messagingSenderId: "26018859742",
    appId: "1:26018859742:web:96fb96d6ff653ee992104f",
    measurementId: "G-ZY7YLWVR02"
  };

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;