import { ActionUnion, ActionTypes } from './actions';
import { State, initialState } from './state';

export function memoReducer(
  state: State = initialState,
  action: ActionUnion
): State {
  switch (action.type) {
    default:
      return state;
  }
}
