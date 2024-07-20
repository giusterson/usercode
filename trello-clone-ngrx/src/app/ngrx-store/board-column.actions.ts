import { Action } from '@ngrx/store';
import { Task } from '../manager-board/models/task.model';


export const ADD_TASK = 'ADD_TASK';
export class AddTask implements Action {
readonly type = ADD_TASK;

constructor(public payload: { colId: string, newTask: Task }) {

}
}
export const UPDATE_TASK = 'UPDATE_TASK';
export class UpdateTask implements Action {
readonly type = UPDATE_TASK;

constructor(public payload: { colId: string, taskId: string, taskTitle: string, taskDescription: string }) {

}
}

export const DELETE_TASK = 'DELETE_TASK';
export class DeleteTask implements Action {
readonly type = DELETE_TASK;

constructor(public payload: { colId: string, taskId: string }) {

}
}

export const DRAG_COLUMNS = 'DRAG_COLUMNS';
export class DragColumns implements Action {
readonly type = DRAG_COLUMNS;

constructor(public payload: {
  srcColIndex: number;
  destColIndex: number
}) {

}

}

export const DRAG_TASK_SAME_COLUMN = 'DRAG_TASK_SAME_COLUMN';
export class DragTaskSameColumn implements Action {
readonly type = DRAG_TASK_SAME_COLUMN;

constructor(public payload: {
  colId: string,
  srcTaskIndex: number,
  destTaskIndex: number
}) {

}
}

export const DRAG_TASK_DIFFERENT_COLUMN = 'DRAG_TASK_DIFFERENT_COLUMN';
export class DragTaskDifferentColumn implements Action {
readonly type = DRAG_TASK_DIFFERENT_COLUMN;

constructor(public payload: {
  srcColId: string,
  destColId: string,
  srcTaskIndex: number,
  destTaskIndex: number
}) {

}
}