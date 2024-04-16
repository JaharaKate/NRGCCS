import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDRu8oHmRsFuES623UJcHLIzpJHmaJuyFw",
    authDomain: "nrgccs-7535e.firebaseapp.com",
    projectId: "nrgccs-7535e",
    storageBucket: "nrgccs-7535e.appspot.com",
    messagingSenderId: "888636881558",
    appId: "1:888636881558:web:668ad2d913442063ace0b7",
    measurementId: "G-6F3TEMC24E"
  };
  
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
   
  export {db}