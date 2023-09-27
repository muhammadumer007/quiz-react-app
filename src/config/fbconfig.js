// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAnalytics} from "firebase/analytics"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDjACeHBPleSDOfgyDLUxn5bTAAS8iAvFs",
  authDomain: "signup-login-app-97bc2.firebaseapp.com",
  projectId: "signup-login-app-97bc2",
  storageBucket: "signup-login-app-97bc2.appspot.com",
  messagingSenderId: "99764753625",
  appId: "1:99764753625:web:e262359dae0c5fd1ecdac8"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
const analytics =getAnalytics (app)