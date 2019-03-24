import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import * as uuidv1 from 'uuid';

import { RootStoreState } from './../../root-store';
import { MemoStoreActions } from '../../root-store/memo-store';

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

  upload(content) {
    const memo = {
      id: uuidv1(),
      content
    };

    this.store.dispatch(new MemoStoreActions.AddMemoRequestAction(memo));
  }
}
