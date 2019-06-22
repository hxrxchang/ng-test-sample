import { Component, Input, OnInit } from '@angular/core';
import { Memo } from 'src/app/models/memo';

@Component({
  selector: 'app-memo-item',
  templateUrl: './memo-item.component.html',
  styleUrls: ['./memo-item.component.scss']
})
export class MemoItemComponent implements OnInit {
  @Input()
  memoItem: Memo;

  constructor() {}

  ngOnInit() {}
}
