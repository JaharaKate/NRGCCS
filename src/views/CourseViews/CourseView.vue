<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import CourseCard from "@/components/CourseCard.vue";

const courses = [
  {
    CourseName: "Everyday English",
  },
];
</script>

<template>
  <Header class="header" />
  <Banner>
    <template v-slot:title>COURSES</template>
    <template v-slot:subtitle>Learning Modules</template>
  </Banner>
  <div class="course-view">
    <div class v-for="item in courses" :key="item.id">
      <CourseCard class="card"> {{ item.CourseName }}</CourseCard>
    </div>
  </div>
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
.course-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  margin-top: 30px;
}
.card {
  margin-bottom: 30px;
}
</style>
