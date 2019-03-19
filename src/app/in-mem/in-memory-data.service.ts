import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService {
  createDb() {
    const memos = [{ id: '1', content: 'hello' }];

    return { memos };
  }
}
