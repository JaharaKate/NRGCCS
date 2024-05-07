<script setup>
let text = document.getElementById;
</script>

<template>
  <button>
    <v-card class="course-card">
      <v-img
        class="course-image"
        src="/src/assets/img/course1.png"
        cover
      ></v-img>
      <v-card-title class="course-text"> <slot></slot> </v-card-title>
    </v-card>
  </button>
</template>

<style lang="scss" scoped>
.course-card {
  width: 40vw;
  display: inline-block;
}

.course-text {
  font-size: 2em;
  text-align: left;
  padding-left: 1em;
  text-wrap: wrap;
}
</style>
