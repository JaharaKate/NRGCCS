<script setup>
import { ref } from "vue";

const test = () => {};
const isSelected = ref(0);
const adminClick = () => {
  isSelected.value = 0;
};
const moduleClick = () => {
  isSelected.value = 1;
};
</script>

<template>
  <div class="container">
    <button
      class="item"
      :class="{ selected: isSelected == 0 }"
      @click="adminClick()"
    >
      <v-icon icon="mdi-account" />Admin Manager
    </button>
    <button
      class="item"
      :class="{ selected: isSelected == 1 }"
      @click="moduleClick"
    >
      <v-icon icon="mdi-book-edit" /> Module Manager
    </button>
  </div>
</template>

<style lang="scss" scoped>
.container {
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  font-size: 1.3em;
}
.item {
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding-top: 2%;
  padding: 4%;
  border-bottom-style: solid;
  border-bottom-width: 2px;
  border-bottom-color: #9e9e9e;
}
.selected {
  color: white;
  border-bottom-style: none;
  background-color: #ad0606;
}
</style>
