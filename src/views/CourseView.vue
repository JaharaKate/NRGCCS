<script setup>
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
</script>

<template>
  <Header class="header" />
  <Banner />
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
