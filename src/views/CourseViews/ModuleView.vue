<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import db from "@/main";
import { onMounted, ref } from "vue";
import { getDocs, collection, where, query } from "firebase/firestore";

const props = defineProps({
  moduleProp: String,
});

const moduleName = ref(props.moduleProp);

const units = ref([]);

onMounted(async () => {
  let fbunits = [];

  const idsnapshot = await getDocs(
    query(
      collection(db, "Courses"),
      where("Course_Name", "==", props.moduleProp)
    )
  );
  let id = "";
  idsnapshot.forEach((doc) => {
    id = doc.id;
    console.log(id);
  });

  const querySnapshot = await getDocs(collection(db, "Courses", id, "Units"));
  querySnapshot.forEach((doc) => {
    const unit = {
      id: doc.id,
      Unit_Name: doc.data().Unit_Name,
    };
    fbunits.push(unit);
  });
  units.value = fbunits;
});
</script>

<template>
  <Header class="header"></Header>
  <Banner>
    <template v-slot:title>{{ moduleName }}</template>
    <template v-slot:subtitle>{{ test }}</template>
  </Banner>
  <div class v-for="unit in units" :key="unit.id">
    <p>{{ unit.id }} : {{ unit.Unit_Name }}</p>
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
</style>
