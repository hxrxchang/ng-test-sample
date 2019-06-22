import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Memo } from './../models/memo';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class MemoService {
  constructor(private http: HttpClient) {}

  getMemoList(): Observable<Memo[]> {
    return this.http.get<Memo[]>('api/memos');
  }

  addMemo(memo: Memo): Observable<Memo> {
    return this.http.post<Memo>('api/memos', memo, httpOptions);
  }
}
