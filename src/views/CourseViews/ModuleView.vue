<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import db from "@/main";
import { onMounted, ref } from "vue";
import { getDoc, doc } from "firebase/firestore";

defineProps({
  moduleProp: String,
});
const moduleName = ref("Test");

onMounted(async () => {
  const querySnapshot = await getDoc(doc(db, "Courses", "Course 1"));
  if (querySnapshot.exists()) {
    console.log("Document data:", querySnapshot.data());
  } else {
    // docSnap.data() will be undefined in this case
    console.log("No such document!");
  }
});
</script>

<template>
  <Header class="header"></Header>
  <Banner>
    <template v-slot:title>{{ moduleName }}</template>
    <template v-slot:subtitle>{{ test }}</template>
  </Banner>
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
