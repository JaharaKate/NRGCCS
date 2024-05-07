<script setup lang="ts">

</script>

<template>
    <nav class="navbar">
    <div class="navbar-container">
      <img src="/src/assets/img/nrgccs.png" alt="NRGCCS Logo" class="logo" />
      <ul class="navbar-menu">
        <li><a href="home">Home</a></li>
        <li><a href="about">Overview</a></li>
        <li><a href="about">Courses</a></li>
      </ul>
    </div>
    </nav>
</template>

<style lang="scss" scoped>
.navbar {
  background-color: whitesmoke;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
}
.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
</style>