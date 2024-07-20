import { Task } from './task.model';

export class Column {
  constructor(public id: string, public colTitle: string, public colTasks: Task[]) {
    this.id = id;
    this.colTitle = colTitle;
    this.colTasks = colTasks;
  }
}
