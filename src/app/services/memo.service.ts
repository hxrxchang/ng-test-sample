import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Memo } from './../models/memo';

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  constructor(private http: HttpClient) {}

  getMemoList() {
    return this.http.get<Memo[]>('api/memos');
  }
}
