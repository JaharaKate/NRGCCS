import { createApp } from "vue";
// Vuetify
import "vuetify/styles";
import { createVuetify } from "vuetify";
import "@mdi/font/css/materialdesignicons.css"; // Ensure you are using css-loader

import * as components from "vuetify/components";
import * as directives from "vuetify/directives";

//firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDRu8oHmRsFuES623UJcHLIzpJHmaJuyFw",
  authDomain: "nrgccs-7535e.firebaseapp.com",
  projectId: "nrgccs-7535e",
  storageBucket: "nrgccs-7535e.appspot.com",
  messagingSenderId: "888636881558",
  appId: "1:888636881558:web:668ad2d913442063ace0b7",
  measurementId: "G-6F3TEMC24E",
};

// Components
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify);
app.use(router);
app.mount("#app");

// firestore
const firestoreapp = initializeApp(firebaseConfig);
const db = getFirestore(firestoreapp);
export default db;
