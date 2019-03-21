import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadFromGroup = this.fb.group({
    memoContent: ['', Validators.required]
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit() {}
}
