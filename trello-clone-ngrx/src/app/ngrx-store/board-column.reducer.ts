import { AddTask, ADD_TASK, DeleteTask, DELETE_TASK, DragColumns, DragTaskDifferentColumn, DragTaskSameColumn, DRAG_COLUMNS, DRAG_TASK_DIFFERENT_COLUMN, DRAG_TASK_SAME_COLUMN, UpdateTask, UPDATE_TASK } from './board-column.actions';
import { initialState } from './data';

export function reducers(state = initialState, action: AddTask | UpdateTask | DeleteTask | DragColumns | DragTaskSameColumn | DragTaskDifferentColumn) {
  switch (action.type) {

    //handle the ADD_TASK action
    case ADD_TASK: {
      const { colId, newTask } = (action as AddTask).payload;
      const { columns } = JSON.parse(JSON.stringify(state));;
      const column= columns[columns.findIndex((column:any)=>column.id === colId)]
      column.colTasks.splice(column.colTasks.length, 0, {...newTask})
      return {columns };
    }

    // handle the UPDATE_TASK action
    case UPDATE_TASK: {
      const { colId, taskId, taskTitle, taskDescription } = (action as UpdateTask).payload;
      const { columns } = JSON.parse(JSON.stringify(state));
      const colIndex = columns.findIndex((column: any) => column.id === colId);
      const taskIndex = columns[colIndex].colTasks.findIndex((card: any) => card.id === taskId);
      columns[colIndex].colTasks[taskIndex] = { id: taskId, taskTitle, taskDescription };
      return {columns};

    }

    //handle the DELETE_TASK action
    case DELETE_TASK: {
      const { colId, taskId } = (action as DeleteTask).payload;
      const { columns } = JSON.parse(JSON.stringify(state));;
      const colIndex = columns.findIndex((column: any) => column.id === colId);
      const taskIndex = columns[colIndex].colTasks.findIndex((task: any) => task.id === taskId);
      columns[colIndex].colTasks.splice(taskIndex, 1);
      return {columns};
    }

    //handle DRAG_COLUMNS action
    case DRAG_COLUMNS: {
      const { srcColIndex, destColIndex } = (action as DragColumns).payload;
      const { columns } = JSON.parse(JSON.stringify(state));;
      const draggedColumn = columns.splice(srcColIndex, 1)
      columns.splice(destColIndex, 0, ...draggedColumn)
      return {columns}
    
    }

    // handle DRAG_TASK_SAME_COLUMN action
    case DRAG_TASK_SAME_COLUMN: {
      const { colId, srcTaskIndex, destTaskIndex } = (action as DragTaskSameColumn).payload;
      const { columns } = JSON.parse(JSON.stringify(state));;
      const column = columns[columns.findIndex((column: any) => column.id === colId)]
      const draggedTask = column.colTasks.splice(srcTaskIndex, 1);
      column.colTasks.splice(destTaskIndex, 0, ...draggedTask);
      return {columns}
    }

    // handle DRAG_TASK_DIFFERENT_COLUMN action
    case DRAG_TASK_DIFFERENT_COLUMN: {
      const { srcColId, destColId, srcTaskIndex, destTaskIndex } = (action as DragTaskDifferentColumn).payload;
      const {columns} = JSON.parse(JSON.stringify(state));
      const srcCol = columns[columns.findIndex((column: any) => column.id === srcColId)]
      const draggedTask = srcCol.colTasks.splice(srcTaskIndex, 1);
      const destCol = columns[columns.findIndex((column: any) => column.id === destColId)]
      destCol.colTasks.splice(destTaskIndex, 0, ...draggedTask);
      return {columns}
    }

    default:
      return state;
  }
};