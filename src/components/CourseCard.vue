<script setup></script>

<template>
  <v-card class="course-card">
    <v-img class="course-image" src="/src/assets/img/course1.png" cover></v-img>
    <v-card-title class="course-text"> <slot></slot> </v-card-title>
  </v-card>
</template>

<style lang="scss" scoped>
.course-card {
  width: 40vw;
  height: 26vw;
  display: inline-block;
}

.course-image {
}
.course-text {
  font-size: 3em;
}
</style>
