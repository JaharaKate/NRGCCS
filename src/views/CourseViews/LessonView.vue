<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import LessonCard from "@/components/LessonCard.vue";
import db from "@/main";

import { onMounted, ref } from "vue";
import {
  getDoc,
  getDocs,
  collection,
  doc,
  query,
  where,
} from "firebase/firestore";
import router from "@/router";

const props = defineProps({
  moduleProp: String,
  unitProp: String,
  lessonProp: String,
});

const lessonItems = ref({});
const lessonNumber = ref("");
const firebaseisLoaded = ref(false);

onMounted(async () => {
  lessonNumber.value = props.lessonProp.replace("Lesson", "Lesson ");
  const idsnapshot = await getDocs(
    query(
      collection(db, "Courses"),
      where("Course_Name", "==", props.moduleProp)
    )
  );
  let courseid = "";
  idsnapshot.forEach((doc) => {
    courseid = doc.id;
  });
  const unitSnapshot = await getDoc(
    doc(db, "Courses", courseid, "Units", props.unitProp)
  );
  let unitID = unitSnapshot.id;

  const lessonSnapshot = await getDoc(
    doc(db, "Courses", courseid, "Units", unitID, "Lessons", props.lessonProp)
  );
  const fblesson = {
    id: lessonSnapshot.id,
    Lesson_Name: lessonSnapshot.data().Lesson_Name,
    Objectives: lessonSnapshot.data().Objectives,
  };
  lessonItems.value = fblesson;
  console.log(props.lessonProp);
  firebaseisLoaded.value = true;
});
</script>

<template>
  <Header />
  <div class="lesson" v-if="firebaseisLoaded">
    <p class="lesson-header">
      {{ lessonNumber }}
      {{ lessonItems.Lesson_Name }}
    </p>
    <div class="lesson-body">
      <img src="@/assets/img/course1.png" />
      <div class="right-container">
        <ul class="objectives">
          <p>In this lesson, you will learn how to:</p>
          <div v-for="item in lessonItems.Objectives" :key="item.id">
            <li>{{ item }}</li>
          </div>
        </ul>
        <button>
          <p>Begin Lesson</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap");
.lesson {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Arapey", serif;
  font-weight: lighter;
  .lesson-header {
    font-size: 4em;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
  .lesson-body {
    width: 84vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img {
      width: 33vw;
      height: 31vw;
      object-fit: cover;
      object-position: 80% 0%;
      border-radius: 46px;
    }

    .right-container {
      height: 31vw;
      margin-left: 5%;
      margin-right: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-wrap: wrap;
      align-items: start;
      font-size: 2.4em;

      button {
        background-color: #ad0606;
        padding: 0% 8% 0% 8%;
        color: white;
        border-radius: 18px;
      }
    }
  }
}
</style>
