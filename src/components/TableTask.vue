<template>
  <el-table :data="tableData" :border="true">
    <el-table-column width="100" prop="timerFormatted" label="Tempo" />
    <el-table-column resizable prop="name" label="Name" />
    <el-table-column width="100">
      <template #default="scope">
        <el-button text size="small" @click="handleEdit(scope.row)">
          <el-icon>
            <Edit></Edit>
          </el-icon>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
export default {
  name: "TableTask",
  inheritAttrs: false,
  customOptions: {},
};
</script>
<script setup lang="ts">
import { defineProps, defineEmits } from "vue";
import TaskStorageItem from "./task/TaskStorage.js";
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["edit"]);

const handleEdit = (task: TaskStorageItem) => {
  emit("edit", task);
};
</script>
