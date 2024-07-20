import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Column } from '../models/column.model';
import { DragTaskSameColumn, DragTaskDifferentColumn, DragColumns } from '../../ngrx-store/board-column.actions';
import { AppState } from '../../ngrx-store/board-column.state';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board!: Observable<{ columns: Column[] }>;

  constructor(private store: Store<AppState>) {

  }

  ngOnInit(): void {
    this.board = this.store.select('board');

  }
  dropColumns(event: CdkDragDrop<Column[]>) {
    moveItemInArray([event.container], event.previousIndex, event.currentIndex);
    console.log(event.container)
    this.store.dispatch(new DragColumns({
      srcColIndex: event.previousIndex,
      destColIndex: event.currentIndex
    }))
  }


  dropTasks(event: CdkDragDrop<Column>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        [...event.container.data.colTasks],
        event.previousIndex,
        event.currentIndex
      );
      this.store.dispatch(new DragTaskSameColumn({
        colId: event.container.data.id,
        srcTaskIndex: event.previousIndex,
        destTaskIndex: event.currentIndex
      }));

    } else {
      if (event.previousContainer != event.container) {
        transferArrayItem(
          [...event.previousContainer.data.colTasks],
          [...event.container.data.colTasks],
          event.previousIndex,
          event.currentIndex
        );
        this.store.dispatch(new DragTaskDifferentColumn({
          srcColId: event.previousContainer.data.id,
          destColId: event.container.data.id,
          srcTaskIndex: event.previousIndex,
          destTaskIndex: event.currentIndex
        }));

      }
    }
  }
}