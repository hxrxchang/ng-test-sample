import { ActionUnion, ActionTypes } from './actions';
import { State, initialState } from './state';

export function memoReducer(
  state: State = initialState,
  action: ActionUnion
): State {
  switch (action.type) {
    case ActionTypes.FETCH_MEMO_LIST_REQUEST:
      return state;
    case ActionTypes.FETCH_MEMO_LIST_SUCCESS:
      return { ...state, memoList: action.payload };
    case ActionTypes.ADD_MEMO_REQUEST:
      return state;
    case ActionTypes.ADD_MEMO_REQUEST:
      // const addedMemoList: Memo[] = state.memoList.push(action.payload);
      // return {
      //   ...state,
      //   memoList: addedMemoList
      // };
      return state;
    default:
      return state;
  }
}
