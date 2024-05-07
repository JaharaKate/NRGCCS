<script setup lang="ts">

</script>

<template>
    <div class="lesson">
        <p>
            <slot name="lesson-title"></slot>
        </p>
    </div>
    <div class="lesson-body">
        <div class="items">
            <slot name="lesson-img">
                <img src="/src/assets/img/course1.png">
            </slot>
            <p class="lesson-sub">
                <slot name="lesson-caption"></slot>
            </p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.lesson{
  position: relative;
  display: flex;
  text-align: center;
  justify-content: center;
  width: 100vw;
  height: 10vw;
  margin-top: 67px;
}
p {
    padding-top: 2%;
    position: absolute;
    font-family: "Arapey", serif;
    font-size: 3em;
    font-style: normal;
    color: black;
    z-index: 100;
  }
.lesson-body{
    position:relative;
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: space-between;
    width: 100vw;
    height: 30vw;
    background-color: aqua;
}
.lesson-img{
    width: 50px
}
.lesson-sub{

}
</style>