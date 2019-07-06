import { Memo } from './../../models/memo';

export interface State {
  memoList: Memo[];
}

export const initialState: State = {
  memoList: [],
};
