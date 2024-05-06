<script setup></script>

<template>
  <header>
    <div>
      <img src="@/assets/img/nrgccs.png" />
      <h4>NRGCCS admin configuration portal</h4>
    </div>
    <h4>Log Out</h4>
  </header>
</template>

<style lang="scss" scoped>
header {
  background-color: #ad0606;
  align-items: center;
  display: flex;
  justify-content: space-between;
  h4 {
    align-self: right;
    margin-right: 5vw;
    font-size: 1.3em;
  }
}
div {
  display: flex;
  align-items: center;
  justify-content: left;
  margin-left: 20vw;
  gap: 1%;
  img {
    margin: 2px 0px 2px 0px;
    width: 70px;
  }
}
h4 {
  color: white;
  font-weight: normal;
  text-wrap: nowrap;
}
</style>
