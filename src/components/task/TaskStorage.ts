export default class TaskStorageItem {
  name: string;
  timerFormatted: string;
  timer: number;
  constructor(name: string, timerFormatted: string, timer: number) {
    this.name = name;
    this.timerFormatted = timerFormatted;
    this.timer = timer;
  }
}
