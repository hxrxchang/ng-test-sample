import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { Memo } from 'src/app/models/memo';
import { MemoService } from './../../services/memo.service';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.scss']
})
export class MemoListComponent implements OnInit {
  memoList$: Observable<Memo[]>;
  constructor(private memoService: MemoService) {}

  ngOnInit() {
    this.fetchMemoList();
  }

  fetchMemoList() {
    this.memoList$ = this.memoService.getMemoList();
  }
}
