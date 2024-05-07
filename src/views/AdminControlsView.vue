<script setup>
import AdminHeader from "../components/AdminComponents/AdminHeader.vue";
import SectionSelector from "../components/AdminComponents/SectionSelector.vue";
</script>

<template>
  <main>
    <AdminHeader />
    <div id="box-container">
      <div id="side-container"><SectionSelector /></div>
      <div id="main-container"></div>
    </div>
  </main>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Montagu+Slab:opsz,wght@16..144,100..700&display=swap");
body {
  font-family: "Montagu Slab", serif;
}
#box-container {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  height: 100vh;
  width: 1140px;
}
p {
  font-size: larger;
  color: red;
  margin-top: 50px;
}
#side-container {
  background-color: #d9d9d9;
  height: 100%;
  width: 20vw;
  box-shadow: inset gray -40px 0px 40px -40px;
}
#main-container {
  background-color: #f2f2f2;
  height: 100%;
  width: 100%;
}
</style>
