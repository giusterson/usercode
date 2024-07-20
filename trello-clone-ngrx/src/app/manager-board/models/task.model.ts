export class Task {
  constructor(public id: string, public taskTitle: string, public taskDescription: string) {
    this.id = id;
    this.taskTitle = taskTitle;
    this.taskDescription = taskDescription;
  }
}
