<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header class="header" />
  <div class="banner">
    <p>COURSES</p>
    <v-parallax
      class="banner-img"
      src="/src/assets/img/coursesbanner.png"
    ></v-parallax>
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

.banner {
  position: relative;
  display: fle;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 30vw;
  .banner-img {
  }
  p {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: "Arapey", serif;
    font-size: 10em;
    font-style: normal;
    color: white;
    z-index: 100;
  }
}
</style>
