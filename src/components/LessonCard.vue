<script setup></script>

<template>
  <button>
    <v-card class="lesson-card">
      <v-img
        class="lesson-image"
        src="/src/assets/img/course1.png"
        cover
      ></v-img>
      <v-card-title class="lesson-text"><slot></slot></v-card-title>
    </v-card>
  </button>
</template>

<style lang="scss" scoped>
.lesson-card {
  width: 40vw;
  display: inline-block;
}

.lesson-text {
  font-size: 2em;
  text-align: left;
  padding-left: 1em;
  text-wrap: wrap;
}
</style>
