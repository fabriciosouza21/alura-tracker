<template>
  <el-table :data="tableData" :border="true">
    <el-table-column width="100" prop="timerFormatted" label="Tempo" />
    <el-table-column resizable prop="name" label="Name" />
    <el-table-column width="100">
      <template #default="scope">
        <el-button text size="small" @click="handleEdit(scope.$index)">
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
const props = defineProps({
  tableData: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["edit"]);

const handleEdit = (index: number) => {
  emit("edit", index);
};
</script>
