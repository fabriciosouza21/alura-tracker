<template>
  <div>
    <el-form
      :inline="true"
      :model="task"
      ref="ruleFormRef"
      :rules="rules"
      class="demo-form-inline form-task"
    >
      <el-row :gutter="20">
        <el-col :span="18">
          <el-form-item prop="name" class="input-task" label="Tarefa">
            <el-input
              :value="task.name"
              v-model="task.name"
              placeholder="Tarefa"
            />
          </el-form-item>
        </el-col>
        <el-col :span="6">
          <div class="actions">
            <el-form-item>
              <div>{{ timeFormatted }}</div>
            </el-form-item>
            <el-form-item>
              <el-button
                @click="submitForm(ruleFormRef)"
                text
                type="primary"
                :disabled="task.isTimerActive"
              >
                <el-icon :size="20">
                  <VideoPlay></VideoPlay>
                </el-icon>
              </el-button>
            </el-form-item>
            <el-form-item>
              <el-button
                :disabled="!task.isTimerActive"
                text
                type="primary"
                @click="stop"
              >
                <el-icon :size="20">
                  <VideoPause></VideoPause>
                </el-icon>
              </el-button>
            </el-form-item>
          </div>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script lang="ts">
export default {
  name: "FormTask",
  inheritAttrs: false,
  customOptions: {},
};
</script>

<script setup lang="ts">
import { FormInstance, FormRules } from "element-plus";
import { ref, computed, reactive, defineEmits, defineProps, watch } from "vue";
import TaskStorageItem from "./task/TaskStorage";
import TaskStorageService from "./task/TaskStorageService";

const props = defineProps({
  task: TaskStorageItem,
  default: {
    type: TaskStorageItem,
    default: () => new TaskStorageItem("", "00:00:00", 0),
  },
});
const task = reactive({
  name: "",
  time: 0,
  isTimerActive: false,
  // eslint-disable-next-line
  cron: 0 as any,
  timerFormatted: "",
});
const ruleFormRef = ref<FormInstance>();
const emit = defineEmits(["submitForm"]);
const rules = reactive<FormRules>({
  name: [
    {
      required: true,
      message: "Por favor, informe o nome da tarefa",
      trigger: "blur",
    },
  ],
});

const play = () => {
  task.isTimerActive = true;
  task.cron = setInterval(() => {
    task.time += 1;
  }, 1000);
};

const stop = () => {
  task.isTimerActive = false;
  clearInterval(task.cron);
  task.timerFormatted = timeFormattedStorage();
  const { name, timerFormatted, time } = task;
  let taskStorageItem = new TaskStorageItem(name, timerFormatted, time);
  const taskStorageService = new TaskStorageService();
  taskStorageService.setTask(taskStorageItem);
  emit("submitForm");
  task.time = 0;
  task.name = "";
};
const timeFormatted = computed(() => {
  return new Date(task.time * 1000).toISOString().substring(11, 19);
});
const timeFormattedStorage = () => {
  return new Date(task.time * 1000).toISOString().substring(11, 19);
};

const updateTask = (taskUpdate: TaskStorageItem) => {
  task.name = taskUpdate.name;
  task.time = taskUpdate.timer;
};
watch(
  () => props.task,
  (task) => {
    updateTask(task as TaskStorageItem);
  }
);

const submitForm = async (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  await formEl.validate((valid) => {
    if (valid) {
      play();
    }
  });
};
</script>
<style scoped>
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
