// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDRu8oHmRsFuES623UJcHLIzpJHmaJuyFw",
  authDomain: "nrgccs-7535e.firebaseapp.com",
  projectId: "nrgccs-7535e",
  storageBucket: "nrgccs-7535e.appspot.com",
  messagingSenderId: "888636881558",
  appId: "1:888636881558:web:668ad2d913442063ace0b7",
  measurementId: "G-6F3TEMC24E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);