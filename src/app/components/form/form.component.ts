import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  @Input()
  uploadFromGroup;
  @Output()
  upload = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  clickButtton() {
    this.upload.emit();
  }
}
