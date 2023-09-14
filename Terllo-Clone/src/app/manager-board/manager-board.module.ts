import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { ColumnComponent } from './column/column.component';
import { EditTaskDialogComponent } from './edit-task-dialog/edit-task-dialog.component';
import { TaskAddButtonComponent } from './task-add-button/task-add-button.component';
import { TaskCardComponent } from './task-card/task-card.component';



@NgModule({
  declarations: [
    BoardComponent,
    ColumnComponent,
    EditTaskDialogComponent,
    TaskAddButtonComponent,
    TaskCardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ManagerBoardModule { }
