import { Injectable } from '@angular/core';
import { Memo } from './../models/memo';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService {
  createDb() {
    const memos: Memo[] = [{ id: '1', content: 'hello' }];

    return { memos };
  }
}
