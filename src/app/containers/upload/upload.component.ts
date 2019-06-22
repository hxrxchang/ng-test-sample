import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';

import { Memo } from 'src/app/models/memo';
import { MemoStoreActions } from '../../root-store/memo-store';
import { RootStoreState } from './../../root-store';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private store: Store<RootStoreState.State>
  ) {}

  ngOnInit() {}

  upload(memo: Memo) {
    this.store.dispatch(new MemoStoreActions.AddMemoRequestAction(memo));
  }
}
