import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { reducers } from './ngrx-store/board-column.reducer'
import { AppState } from './ngrx-store/board-column.state';
import { ActionReducerMap, StoreModule } from '@ngrx/store';
import { ManagerBoardModule } from '../manager-board/manager-board.module.ts';

export const reducer: ActionReducerMap<AppState, any> = {
  board: reducers
};
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(reducer),
    BrowserModule,
    ManagerBoardModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
