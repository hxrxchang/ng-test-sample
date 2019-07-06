import { ActionTypes, ActionUnion } from './actions';
import { initialState, State } from './state';

export function memoReducer(state: State = initialState, action: ActionUnion): State {
  switch (action.type) {
    case ActionTypes.FETCH_MEMO_LIST_REQUEST:
      return state;
    case ActionTypes.FETCH_MEMO_LIST_SUCCESS:
      return { ...state, memoList: action.payload };
    case ActionTypes.ADD_MEMO_REQUEST:
      return state;
    case ActionTypes.ADD_MEMO_SUCCESS:
      return {
        ...state,
        memoList: [...state.memoList, action.payload],
      };
    default:
      return state;
  }
}
