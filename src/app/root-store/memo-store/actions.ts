import { Action } from '@ngrx/store';

export enum ActionTypes {
  FETCH_MEMO_LIST_REQUEST = '[Memo] Fetch Memo List Request',
  FETCH_MEMO_LIST_SUCCESS = '[Memo] Fettch Memo List Success',
  ADD_MEMO_REQUEST = '[Memo] Add Memo Request',
  ADD_MEMO_SUCCESS = '[Memo] Add Memo Success'
}

export class FetchMemoListRequestAction implements Action {
  readonly type = ActionTypes.FETCH_MEMO_LIST_REQUEST;
}

export class FetchMemoListSuccessAction implements Action {
  readonly type = ActionTypes.FETCH_MEMO_LIST_SUCCESS;
}

export class AddMemoRequestAction implements Action {
  readonly type = ActionTypes.ADD_MEMO_REQUEST;
}

export class AddMemoSuccessAction implements Action {
  readonly type = ActionTypes.ADD_MEMO_SUCCESS;
}

export type ActionUnion =
  | FetchMemoListRequestAction
  | FetchMemoListSuccessAction
  | AddMemoRequestAction
  | AddMemoSuccessAction;
