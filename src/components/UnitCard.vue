<script setup></script>

<template>
  <v-card elevation="5" class="unit-card" :ripple="false">
    <v-card-title primary-title class="card-title">
      <slot></slot>
    </v-card-title>
  </v-card>
</template>

<style lang="scss" scoped>
.unit-card {
  display: flex;
  padding-left: 1%;
  width: 70%;
  box-shadow: 20px;
  cursor: pointer;
}
.card-title {
  font-size: 2em;
}
</style>
