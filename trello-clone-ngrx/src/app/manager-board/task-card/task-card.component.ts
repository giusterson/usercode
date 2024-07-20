import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EditTaskDialogComponent } from '../edit-task-dialog/edit-task-dialog.component';
import { Task } from '../models/task.model';
@Component({
  selector: "app-task-card",
  templateUrl: "./task-card.component.html",
  styleUrls: ["./task-card.component.scss"],
})
export class TaskCardComponent implements OnInit {
  
  // Task 3: declare variables here
 @Input() colId!: string;
 @Input() task!: Task ;
 @Input() tasks!: Task[];
 
 constructor(
  public dialog: MatDialog
) {
}

  ngOnInit(): void {}

  updateCard(): void {
    this.dialog.open(EditTaskDialogComponent, {
      width: '600px',
      data: {
        colId: this.colId,
        taskId: this.task.id,
        taskTitle: this.task.taskTitle,
        taskDescription: this.task.taskDescription,
      }
    });
  }
}
