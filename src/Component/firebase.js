import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCc3126g_G30tH_l728kwCwHHnEfkEb1gA",
    authDomain: "campusdictionary-9f237.firebaseapp.com",
    projectId: "campusdictionary-9f237",
    storageBucket: "campusdictionary-9f237.appspot.com",
    messagingSenderId: "465988482495",
    appId: "1:465988482495:web:b562e29157b0c336b1dd0a",
    measurementId: "G-L122S24G6Y"
  };

export const app=firebase.initializeApp(firebaseConfig);