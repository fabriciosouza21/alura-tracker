<template>
  <div class="common-layout">
    <el-container>
      <el-aside width="200px"><SideBar /></el-aside>
      <el-main>
        <FormTask></FormTask>
        <div>
          <TableTask></TableTask>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SideBar from "./components/SideBar.vue";
import FormTask from "./components/FormTask.vue";
import TableTask from "./components/TableTask.vue";
export default defineComponent({
  name: "App",
  components: {
    SideBar,
    FormTask,
    TableTask,
  },
});
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
.el-form-item__error {
  font-size: 14px !important;
}
</style>
