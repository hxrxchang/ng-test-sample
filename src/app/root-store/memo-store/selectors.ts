import { createFeatureSelector, createSelector } from '@ngrx/store';

import { State } from './state';

const getMemoList = (state: State) => state.memoList;

export const selectMemoState = createFeatureSelector<State>('memo');
export const selectMemoList = createSelector(
  selectMemoState,
  getMemoList
);
