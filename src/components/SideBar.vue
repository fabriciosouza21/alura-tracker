<template>
  <header>
    <h1 class="title">
      <img class="img-logo" src="../assets/logo.png" alt="" />
    </h1>
  </header>
</template>

<script lang="ts">
export default {
  name: "SideBar",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding-top: 1em;
  width: 100%;
}
.img-logo {
  width: 80%;
}
.title {
  text-align: center;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>
