<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import CourseCard from "@/components/CourseCard.vue";
</script>

<template>
  <Header class="header" />
<<<<<<< HEAD
  <Banner />
  <div class="course-view-content">
    <CourseCard />
    <!-- Add more CourseCard components as needed -->
  </div>
=======
  <Banner>
    <template v-slot:title>COURSES</template>
    <template v-slot:subtitle>Learning Modules</template>
  </Banner>
>>>>>>> 6d47b9b83c8ea07efa3adb089697c508984c26f9
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap");
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 200;
}
<<<<<<< HEAD
.course-view-content {
  padding-top: 100px;
  margin: 10px; /* Adjust as needed to avoid overlapping with header */
}
=======
>>>>>>> 6d47b9b83c8ea07efa3adb089697c508984c26f9
</style>
