import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  content: string;
  @Input()
  disabled: boolean;
  @Output()
  clickButton = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  onClickButton() {
    this.clickButton.emit();
  }
}
