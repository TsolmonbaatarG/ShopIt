import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDncLnOw1011RI4yL946_AVTwbsu3i3tNI",
  authDomain: "khutulcement-orderapp2022.firebaseapp.com",
  projectId: "khutulcement-orderapp2022",
  storageBucket: "khutulcement-orderapp2022.appspot.com",
  messagingSenderId: "419604798358",
  appId: "1:419604798358:web:ef7a669a7f103f4a341bb7"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();






