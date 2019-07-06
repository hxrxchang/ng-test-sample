import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';

import { MemoService } from './../../services/memo.service';
import * as MemoActions from './actions';

@Injectable()
export class MemoEffects {
  constructor(private actions$: Actions<MemoActions.ActionUnion>, private memoService: MemoService) {}

  @Effect()
  fetch$: Observable<Action> = this.actions$.pipe(
    ofType(MemoActions.ActionTypes.FETCH_MEMO_LIST_REQUEST),
    concatMap((action) => this.memoService.getMemoList().pipe(map((memoList) => new MemoActions.FetchMemoListSuccessAction(memoList)))),
  );

  @Effect()
  add$: Observable<Action> = this.actions$.pipe(
    ofType(MemoActions.ActionTypes.ADD_MEMO_REQUEST),
    concatMap((action) =>
      this.memoService.addMemo(action.payload).pipe(
        map((memo) => {
          return new MemoActions.AddMemoSuccessAction(memo);
        }),
      ),
    ),
  );
}
