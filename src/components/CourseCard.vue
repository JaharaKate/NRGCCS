<script setup></script>

<template>
  <div class="course-card">
    <v-card>
      <v-img
        class="course1"
        max-height="200"
        src="/src/assets/img/course1.png"
        cover
      ></v-img>
      <v-card-title class="course-text"> EverydayEnglish </v-card-title>
    </v-card>
  </div>
</template>

<style lang="scss" scoped>
.course-card {
  width: 500px;
  height: 600vh;
  display: inline-block;
}

.course1 {
  width: 100%;
  height: 200vh;
}
</style>
