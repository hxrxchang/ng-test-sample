import { TestBed } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { provideMockActions } from '@ngrx/effects/testing';
import { cold, hot } from 'jasmine-marbles';
import { Observable, of } from 'rxjs';

import { MemoEffects } from './effects';
import * as MemoActions from './actions';
import { MemoService } from './../../services/memo.service';

describe('memo effects', () => {
  let effects: MemoEffects;
  let actions: Observable<any>;
  let memoService: MemoService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [MemoEffects, MemoService, provideMockActions(() => actions)]
    });

    effects = TestBed.get(MemoEffects);
    memoService = TestBed.get(MemoService);
  });

  it('should return FetchMemoListSuccessAction', () => {
    const payload = [{ id: '1', content: 'hello' }];
    const action = new MemoActions.FetchMemoListRequestAction();
    const completion = new MemoActions.FetchMemoListSuccessAction(payload);
    spyOn(memoService, 'getMemoList').and.returnValue(of(payload));
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });
    expect(effects.fetch$).toBeObservable(expected);
  });

  it('should return AddMemoSuccessAction', () => {
    const payload = { id: '2', content: 'goobye' };
    const action = new MemoActions.AddMemoRequestAction(payload);
    const completion = new MemoActions.AddMemoSuccessAction(payload);
    spyOn(memoService, 'addMemo').and.returnValue(of(payload));
    actions = hot('--a-', { a: action });
    const expected = cold('--b', { b: completion });
    expect(effects.add$).toBeObservable(expected);
  });
});
