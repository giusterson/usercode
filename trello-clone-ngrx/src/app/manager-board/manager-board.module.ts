import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { TaskAddButtonComponent } from './task-add-button/task-add-button.component';
import { TaskCardComponent } from './task-card/task-card.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    BoardComponent,
    TaskCardComponent,
    TaskAddButtonComponent,
    ColumnComponent,
    EditTaskDialogComponent

  ],
// Task 1: Add export array here
  imports: [
    CommonModule,
    BrowserModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
    DragDropModule,
    FormsModule,
    MatDialogModule,

  ],
  exports: [
    BoardComponent
  ]
})
export class ManagerBoardModule { }
