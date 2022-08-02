import TaskStorageItem from "./TaskStorage";

export default class TaskStorageService {
  setTask(task: TaskStorageItem) {
    const tasksStorageString: string =
      localStorage.getItem("tasks") != null
        ? (localStorage.getItem("tasks") as string)
        : "[]";
    const tasksStorage = JSON.parse(tasksStorageString) as TaskStorageItem[];
    if (!tasksStorage.find((t: TaskStorageItem) => t.name === task.name)) {
      tasksStorage.push(task);
    }
    localStorage.setItem("tasks", JSON.stringify(tasksStorage));
  }
  getTasks() {
    const tasksStorageString: string =
      localStorage.getItem("tasks") != null
        ? (localStorage.getItem("tasks") as string)
        : "[]";
    return JSON.parse(tasksStorageString);
  }
}
