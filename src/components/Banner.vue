<script setup lang="ts">
</script>

<template>
    <div class="banner">
        <p>COURSES</p>
        <v-parallax
            class="banner-img"
            src="/src/assets/img/coursesbanner.png"
        ></v-parallax>
        <!-- red part "Learning Modules" -->
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap");
.banner {
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 30vw;
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