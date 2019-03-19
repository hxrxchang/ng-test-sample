import { Component, OnInit } from '@angular/core';
import { MemoService } from './../../services/memo.service';

@Component({
  selector: 'app-memo-list',
  templateUrl: './memo-list.component.html',
  styleUrls: ['./memo-list.component.scss']
})
export class MemoListComponent implements OnInit {
  constructor(private memoService: MemoService) {}

  ngOnInit() {
    const memo = { id: '12', content: 'hoge' };
    this.memoService.addMemo(memo).subscribe(data => {
      this.memoService.getMemoList().subscribe(memoList => {
        console.log(memoList);
      });
    });
  }
}
