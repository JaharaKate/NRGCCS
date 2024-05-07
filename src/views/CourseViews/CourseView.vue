<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import CourseCard from "@/components/CourseCard.vue";
import db from "@/main";

import { onMounted, ref } from "vue";
import { getDocs, collection } from "firebase/firestore";
import router from "@/router";

const courses = ref([]);

onMounted(async () => {
  const querySnapshot = await getDocs(collection(db, "Courses"));
  let fbcourses = [];
  querySnapshot.forEach((doc) => {
    const course = {
      id: doc.id,
      Course_Name: doc.data().Course_Name,
    };
    fbcourses.push(course);
  });
  courses.value = fbcourses;
});

const courseClick = (course) => {
  router.push("/courses/" + course.Course_Name);
};
</script>

<template>
  <Header class="header" />
  <Banner>
    <template v-slot:title>COURSES</template>
    <template v-slot:subtitle>Learning Modules</template>
  </Banner>
  <div class="course-view">
    <div class v-for="course in courses" :key="course.id">
      <CourseCard class="card" @click="courseClick(course)">
        {{ course.Course_Name }}</CourseCard
      >
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
