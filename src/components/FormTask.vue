<template>
  <el-form :inline="true" :model="task" class="demo-form-inline form-task">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-form-item style="width: 100%" label="Tarefa">
          <el-input v-model="task.name" placeholder="Tarefa" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <el-form-item>
          <el-button text type="primary">
            <el-icon :size="20">
              <VideoPlay></VideoPlay>
            </el-icon>
          </el-button>
        </el-form-item>
      </el-col>
    </el-row>
  </el-form>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "FormTask",
  data() {
    return {
      task: {
        name: "",
      },
    };
  },
});
</script>
<style>
.form-task {
  padding: 1rem;
}
</style>
