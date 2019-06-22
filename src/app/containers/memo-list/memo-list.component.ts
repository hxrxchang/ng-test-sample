import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Memo } from 'src/app/models/memo';
import { MemoStoreSelectors } from 'src/app/root-store/memo-store';
import { RootStoreState } from './../../root-store';
import { MemoStoreActions } from './../../root-store/memo-store';
import { MemoService } from './../../services/memo.service';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.scss']
})
export class MemoListComponent implements OnInit {
  memoList$: Observable<Memo[]>;
  constructor(
    private memoService: MemoService,
    private store: Store<RootStoreState.State>
  ) {}

  ngOnInit() {
    this.store.dispatch(new MemoStoreActions.FetchMemoListRequestAction());
    this.memoList$ = this.store.pipe(select(MemoStoreSelectors.selectMemoList));
  }
}
