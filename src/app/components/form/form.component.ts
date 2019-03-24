import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  uploadFromGroup = this.fb.group({
    memoContent: ['', Validators.required]
  });

  @Output()
  upload = new EventEmitter();

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}

  clickButtton() {
    this.upload.emit(this.uploadFromGroup.value.memoContent);
    this.uploadFromGroup.reset();
  }
}
