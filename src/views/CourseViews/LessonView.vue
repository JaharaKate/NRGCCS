<script setup>
import Header from "@/components/Header.vue";
import LessonSlots from "@/components/LessonSlots.vue";
</script>

<template>
  <Header class="header" />
  <LessonSlots>
    <template #lesson-title>Lesson 1 - A Walk that is Always Worthwhile</template>
    <template #lesson-img>
      <img class="aba" src="/src/assets/img/course2.png"/>
    </template>
    <template #lesson-caption>Lesson 1 - A Walk that is Always Worthwhile</template>
  </LessonSlots>
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
.aba{
  width: 50vw;
}

</style>
