import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../ngrx-store/board-column.state';
import { UpdateTask, DeleteTask } from '../../ngrx-store/board-column.actions';

@Component({
  selector: 'app-edit-task-dialog',
  templateUrl: './edit-task-dialog.component.html',
  styleUrls: ['./edit-task-dialog.component.scss']
})
export class EditTaskDialogComponent implements OnInit {
  
  taskTitleFormControl = new FormControl(this.data.taskTitle, Validators.required);
  taskDescriptionFormControl = new FormControl(this.data.taskDescription);


  constructor(
    private store: Store<AppState>,
    public dialogRef: MatDialogRef<EditTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {
      colId: string,
      taskId: string,
      taskTitle: string,
      taskDescription: string,
    }) {
  }

  ngOnInit(): void {

  }

  updateTask(): void {
    this.store.dispatch(new UpdateTask({
      colId: this.data.colId,
      taskId: this.data.taskId,
      taskTitle: this.taskTitleFormControl.value,
      taskDescription: this.taskDescriptionFormControl.value
    }));

  }

  deleteTask(): void {
    this.store.dispatch(new DeleteTask({
      colId: this.data.colId,
      taskId: this.data.taskId
    }));

    this.dialogRef.close();
  }

}