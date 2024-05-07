<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import LessonCard from "@/components/LessonCard.vue";
import db from "@/main";
import UnitIntro from "@/components/UnitIntro.vue";

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
});
</script>

<template>
  <Header class="header" />
  <Banner>
    <template v-slot:title>{{ unitName }}</template>
    <template v-slot:subtitle>Introduction</template>
  </Banner>
  <UnitIntro>
    <template v-slot:Introduction>{{ unitInfo.Introduction }}</template>
    <template v-slot:Language_Functions>{{
      unitInfo.LanguageFunctions
    }}</template>
    <template v-slot:Module_Objectives>{{
      unitInfo.Module_Objectives
    }}</template>
  </UnitIntro>
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
</style>
