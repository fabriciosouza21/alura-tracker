<template>
  <div class="common-layout">
    <el-container class="width">
      <el-aside class="background-color" width="200px"><SideBar /></el-aside>
      <el-main>
        <FormTask v-model:task="taskEdit" @submit-form="updateList"></FormTask>
        <div class="margin-list-task">
          <TableTask @edit="edit($event)" :tableData="tableData"></TableTask>
        </div>
      </el-main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import SideBar from "./components/SideBar.vue";
import FormTask from "./components/FormTask.vue";
import TableTask from "./components/TableTask.vue";
import TaskStorageService from "./components/task/TaskStorageService";
import TaskStorageItem from "./components/task/TaskStorage";
export default defineComponent({
  name: "App",
  setup() {
    const tableData = ref([]);
    const taskEdit = ref(new TaskStorageItem("", "00:00:00", 0));
    const taskStorageService = new TaskStorageService();

    const updateList = () => {
      tableData.value = taskStorageService.getTasks();
      taskEdit.value = new TaskStorageItem("", "00:00:00", 0);
    };

    const edit = (index: TaskStorageItem) => {
      taskEdit.value = index;
    };

    onMounted(() => {
      tableData.value = taskStorageService.getTasks();
    });
    return { tableData, updateList, edit, taskEdit };
  },
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
.margin-list-task {
  margin-right: 2em;
  margin-left: 2em;
}
.background-color {
  background: #0d3b66;
}
.width {
  height: 100vh;
}
</style>
