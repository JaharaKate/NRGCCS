<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import UnitCard from "@/components/UnitCard.vue";
import db from "@/main";
import { onMounted, ref } from "vue";
import { getDocs, collection, where, query } from "firebase/firestore";
import router from "@/router";

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

const unitClick = (unit) => {
  router.push("/courses/" + props.moduleProp + "/" + unit.id);
};
</script>

<template>
  <Header class="header"></Header>
  <Banner>
    <template v-slot:title>{{ moduleName }}</template>
    <template v-slot:subtitle>Units</template>
  </Banner>
  <div class="unit-section" v-for="unit in units" :key="unit.id">
    <UnitCard class="unit-card" @click="unitClick(unit)"
      >{{ unit.id.replace("Unit", "Unit ") }} - {{ unit.Unit_Name }}</UnitCard
    >
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
.unit-section {
  display: flex;
  align-items: center;
  justify-content: center;
}
.unit-card {
  margin-top: 2%;
  margin-bottom: 1%;
}
</style>
