import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable} from 'rxjs';

import {AppState } from 'src/app/ngrx-store/board-column.state.ts';
import { Column } from '../models/column.model';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  
  board!: Observable<{columns: column[]}>
  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.board = this.store.select('board');
  }

}
