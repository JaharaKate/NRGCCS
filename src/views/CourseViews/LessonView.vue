<script setup>
import Header from "@/components/Header.vue";
</script>

<template>
  <Header />
  <div class="lesson">
    <p class="lesson-header">Lesson 1 - A Walk that is Always Worthwhile</p>
    <div class="lesson-body">
      <img src="@/assets/img/course1.png" />
      <div class="right-container">
        <div class="objectives">
          <p>In this lesson, you will learn how to:</p>
          <p>1. Express your ideas about walking in the park.</p>
          <p>
            2. Describe your experiences about visiting parks using complex
            question tags.
          </p>
        </div>
        <button>
          <p>Begin Lesson</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Arapey:ital@0;1&display=swap");
.lesson {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Arapey", serif;
  font-weight: lighter;
  .lesson-header {
    font-size: 4em;
    margin-top: 1vw;
    margin-bottom: 1vw;
  }
  .lesson-body {
    width: 84vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;

    img {
      width: 33vw;
      height: 31vw;
      object-fit: cover;
      object-position: 80% 0%;
      border-radius: 46px;
    }

    .right-container {
      height: 31vw;
      margin-left: 5%;
      margin-right: 5%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      text-wrap: wrap;
      align-items: start;

      p {
        font-size: 2.4em;
      }

      button {
        background-color: #ad0606;
        padding: 0% 8% 0% 8%;
        color: white;
        border-radius: 18px;
      }
    }
  }
}
</style>
