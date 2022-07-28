<template>
  <el-form :inline="true" :model="task" class="demo-form-inline form-task">
    <el-row :gutter="20">
      <el-col :span="18">
        <el-form-item class="input-task" label="Tarefa">
          <el-input v-model="task.name" placeholder="Tarefa" />
        </el-form-item>
      </el-col>
      <el-col :span="6">
        <div class="actions">
          <el-form-item>
            <div>{{ timeFormatted }}</div>
          </el-form-item>

          <el-form-item>
            <el-button @click="play" text type="primary">
              <el-icon :size="20">
                <VideoPlay></VideoPlay>
              </el-icon>
            </el-button>
          </el-form-item>
          <el-form-item>
            <el-button @click="stop" text type="primary">
              <el-icon :size="20">
                <VideoPause></VideoPause>
              </el-icon>
            </el-button>
          </el-form-item>
        </div>
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
        time: 0,
        cron: 0 as any,
      },
    };
  },
  methods: {
    play() {
      this.task.cron = setInterval(() => {
        this.task.time += 1;
      }, 1000);
    },
    stop() {
      clearInterval(this.task.cron);
    },
  },
  computed: {
    timeFormatted(): string {
      return new Date(this.task.time * 1000).toISOString().substring(11, 19);
    },
  },
});
</script>
<style>
.form-task {
  padding: 1rem;
}
.actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.el-input.is-disabled .el-input__inner {
  color: var(--el-color-primary);
  cursor: not-allowed;
}

.input-task {
  width: 100%;
}
</style>
