import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ActionReducer, ActionReducerMap, MetaReducer, StoreModule } from '@ngrx/store';
import { localStorageSync } from 'ngrx-store-localstorage';
import { reducers } from './ngrx-store/board-column.reducer';
import { AppState } from './ngrx-store/board-column.state';
import { ManagerBoardModule } from './manager-board/manager-board.module';

export function localStorageSyncReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return localStorageSync({ keys: ['board'], rehydrate: true })(reducer);
}

const metaReducers: Array<MetaReducer<any, any>> = [localStorageSyncReducer];

export const reducer: ActionReducerMap<AppState, any> = {
  board: reducers
};

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    StoreModule.forRoot(reducer
      , { metaReducers }
    ),
    ManagerBoardModule,
    BrowserModule,
    BrowserAnimationsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}