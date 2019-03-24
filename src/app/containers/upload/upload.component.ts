import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { MemoService } from './../../services/memo.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  uploadFromGroup = this.fb.group({
    memoContent: ['', Validators.required]
  });

  constructor(private fb: FormBuilder, private memoService: MemoService) {}

  ngOnInit() {}

  upload() {
    const memoContent = this.uploadFromGroup.value.memoContent;
    this.memoService
      .addMemo({ id: '111', content: memoContent })
      .subscribe(data => console.log(data));
  }
}
