<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="navbar">
    <img src="/src/assets/img/nrgccs.png" alt="NRGCCS Logo" class="logo" />
    <div class="navbar">
      <RouterLink class="item" to="/Home">Home</RouterLink>
      <RouterLink class="item" to="/About">Overview</RouterLink>
      <RouterLink class="item" to="/Courses">Courses</RouterLink>
    </div>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4% 0 4%;
  box-shadow: 0px 3px 20px 0px gray;
  // horizontal vertical blur spread

  img {
    width: 80px;
  }
  .navbar {
    width: 20%;
    display: flex;
    justify-content: space-between;
  }
  a {
    color: #ad0606;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2em;
  }
}
</style>
