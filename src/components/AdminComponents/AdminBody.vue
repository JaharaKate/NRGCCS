<script setup>
import SectionSelector from "./SectionSelector.vue";
</script>

<template>
  <div id="box-container">
    <div id="side-container"><SectionSelector /></div>
    <div id="main-container"></div>
  </div>
  <div></div>
</template>

<style lang="scss" scoped>
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
