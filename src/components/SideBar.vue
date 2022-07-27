<template>
  <header>
    <h1 class="title">
      <img class="img-logo" src="../assets/logo.png" alt="" />
    </h1>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SideBar",
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  padding-top: 1em;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
}
.img-logo {
  width: 80%;
  text-align: center;
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
