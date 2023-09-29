import {Column} from '../manager-board/models/column.model.ts';

export interface AppState {
    readonly board: {columns : Column[]} 
}
