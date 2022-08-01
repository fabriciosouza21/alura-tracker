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
            <el-input v-model="task.name" placeholder="Tarefa" />
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
import { FormInstance, FormRules } from "element-plus";
import { ref, computed, defineComponent, reactive } from "vue";
export default defineComponent({
  name: "FormTask",
  setup() {
    const task = reactive({
      name: "",
      time: 0,
      isTimerActive: false,
      // eslint-disable-next-line
      cron: 0 as any,
    });

    const ruleFormRef = ref<FormInstance>();
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
      task.time = 0;
    };
    const timeFormatted = computed(() => {
      return new Date(task.time * 1000).toISOString().substring(11, 19);
    });

    const submitForm = async (formEl: FormInstance | undefined) => {
      if (!formEl) return;
      await formEl.validate((valid, fields) => {
        if (valid) {
          play();
          console.log("submit!");
        } else {
          console.log("error submit!", fields);
        }
      });
    };

    return {
      task,
      rules,
      timeFormatted,
      play,
      stop,
      submitForm,
      ruleFormRef,
    };
  },
});
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
