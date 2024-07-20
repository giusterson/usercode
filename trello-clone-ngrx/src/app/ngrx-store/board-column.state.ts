// src/app/app.state.ts
import { Column } from "../manager-board/models/column.model";

export interface AppState {
  readonly board: { columns: Column[] };
}
 