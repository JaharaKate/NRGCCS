<script setup></script>

<template>
  <div class="container">
    <div class="item" id="selected">
      <v-icon icon="mdi-account" />Admin Manager
    </div>
    <div class="item"><v-icon icon="mdi-book-edit" /> Module Manager</div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 20%;
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
}
.item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 2%;
  padding: 4%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #9e9e9e;
}
#selected {
  color: white;
  border-bottom-style: none;
  background-color: #ad0606;
}
</style>
