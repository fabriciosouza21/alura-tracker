<template>
  <el-row :gutter="20">
    <el-col :span="4">
      <SideBar />
    </el-col>
    <el-col :span="20">
      <FormTask></FormTask>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import FormTask from "./components/FormTask.vue";
export default defineComponent({
  name: "App",
  components: {
    SideBar,
    FormTask,
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
</style>
