import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';

import { Memo } from 'src/app/models/memo';
import { MemoService } from './../../services/memo.service';
import { RootStoreState } from './../../root-store';
import { MemoStoreSelectors } from 'src/app/root-store/memo-store';
import { MemoStoreActions } from './../../root-store/memo-store';

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
