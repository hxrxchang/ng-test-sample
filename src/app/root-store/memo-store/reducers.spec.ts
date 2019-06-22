import {
  AddMemoRequestAction,
  AddMemoSuccessAction,
  FetchMemoListRequestAction,
  FetchMemoListSuccessAction
} from './actions';
import { memoReducer } from './reducers';
import { State } from './state';

describe('memoReducer', () => {
  const state: State = {
    memoList: []
  };

  it('FetchMemoListRequestAction', () => {
    expect(memoReducer(state, new FetchMemoListRequestAction())).toEqual(state);
  });

  it('FetchMemoListSuccessAction', () => {
    const memoList = [
      { id: '1', content: 'hello' },
      { id: '2', content: 'goobye' }
    ];
    expect(
      memoReducer(state, new FetchMemoListSuccessAction(memoList))
    ).toEqual({ memoList });
  });

  it('AddMemoRequestAction', () => {
    const memo = { id: '1', content: 'hello' };
    expect(memoReducer(state, new AddMemoRequestAction(memo))).toEqual(state);
  });

  it('AddMemoSuccessAction', () => {
    const memo = { id: '1', content: 'hello' };
    expect(memoReducer(state, new AddMemoSuccessAction(memo))).toEqual({
      ...state,
      memoList: [...state.memoList, memo]
    });
  });
});
