import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import * as uuidv1 from 'uuid';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  uploadFromGroup = this.fb.group({
    memoContent: ['', Validators.required]
  });
  memoId: string = uuidv1();

  @Output()
  upload = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  clickButtton() {
    const memo = {
      id: this.memoId,
      content: this.uploadFromGroup.value.memoContent
    };
    this.upload.emit(memo);
    this.reset();
  }

  reset() {
    this.uploadFromGroup.reset();
    this.memoId = uuidv1();
  }
}
