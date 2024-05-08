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

function romanize(num) {
  var lookup = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1,
    },
    roman = "",
    i;
  for (i in lookup) {
    while (num >= lookup[i]) {
      roman += i;
      num -= lookup[i];
    }
  }
  return roman;
}

const props = defineProps({
  moduleProp: String,
  unitProp: String,
});

const unitName = ref("");
const unitInfo = ref({});
const lessons = ref([]);
const firebaseisLoaded = ref(false);

onMounted(async () => {
  const idsnapshot = await getDocs(
    query(
      collection(db, "Courses"),
      where("Course_Name", "==", props.moduleProp)
    )
  );
  let id = "";
  idsnapshot.forEach((doc) => {
    id = doc.id;
  });
  const unitSnapshot = await getDoc(
    doc(db, "Courses", id, "Units", props.unitProp)
  );
  const fbunit = {
    id: unitSnapshot.id,
    Unit_Name: unitSnapshot.data().Unit_Name,
    Module_Objectives: unitSnapshot.data().Module_Objectives,
    Introduction: unitSnapshot.data().Introduction,
    Language_Functions: unitSnapshot.data().Language_Functions,
  };

  unitInfo.value = fbunit;

  let unitID = Number(fbunit.id.replace("Unit", ""));

  unitName.value = "Unit " + romanize(unitID) + " - " + fbunit.Unit_Name;

  const querySnapshot = await getDocs(
    collection(db, "Courses", id, "Units", props.unitProp, "Lessons")
  );
  let fblessons = [];
  querySnapshot.forEach((doc) => {
    const lessons = {
      id: doc.id,
      Lesson_Name: doc.data().Lesson_Name,
    };
    fblessons.push(lessons);
  });
  lessons.value = fblessons;

  firebaseisLoaded.value = true;
});

const lessonClick = (lesson) => {
  router.push(
    "/courses/" + props.moduleProp + "/" + props.unitProp + "/" + lesson.id
  );
};
</script>

<template>
  <Header class="header" />
  <div v-if="firebaseisLoaded">
    <Banner>
      <template v-slot:title>{{ unitName }}</template>
      <template v-slot:subtitle>Introduction</template>
    </Banner>

    <div class="intro-section">
      <div class="introduction">
        <p>{{ unitInfo.Introduction }}</p>
      </div>
      <div class="function-objectives">
        <h4>Language Functions</h4>
        <p>{{ unitInfo.Language_Functions }}</p>
        <h4>Module Objectives</h4>
        <div v-for="item in unitInfo.Module_Objectives" :key="item.id">
          <p>• {{ item }}</p>
        </div>
      </div>
    </div>
    <h1>Lessons</h1>
    <div class="lesson-view">
      <div class v-for="lesson in lessons" :key="lesson.id">
        <LessonCard class="card" @click="lessonClick(lesson)">
          {{ lesson.Lesson_Name }}
        </LessonCard>
      </div>
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
.intro-section {
  display: flex;
  flex-direction: row;
  margin-top: 2vw;
  gap: 6vw;
  .introduction {
    width: 50%;
    display: flex;
    padding: 0 0 0 8vw;
    text-wrap: wrap;
    font-size: 2em;
  }
  .function-objectives {
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 0 8vw 0 0;
    font-size: 2em;
    p {
      font-size: 0.8em;
      margin-bottom: 0.5vw;
    }
  }
}
h1 {
  text-align: center;
  font-size: 5em;
  margin-top: 1vw;
}
.lesson-view {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2%;
  margin-top: 2vw;
}
</style>
