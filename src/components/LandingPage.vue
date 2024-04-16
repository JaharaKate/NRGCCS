<template>
  <v-app-bar app color="#AD0606" dark flat class="px-12">
    <v-img src ="../"></v-img>
    <v-spacer></v-spacer>
    <v-btn text @click="scroll('home')" class="text-white">Home</v-btn>
    <v-btn text @click="scroll('about')" class="text-white">About</v-btn>
  </v-app-bar>
</template>
  
  <script>
  export default {
    name: 'LandingPage',

    methods: {
    scroll(refName) {
      const element = document.getElementById(refName);
      element.scrollIntoView({ behavior: "smooth" });
    },
  },
  
  };
  </script>
  
  <style scoped>
  
  </style>
  