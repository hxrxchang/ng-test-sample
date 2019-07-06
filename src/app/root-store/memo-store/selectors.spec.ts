import { selectMemoList } from './selectors';
import { State } from './state';

describe('memoSelector', () => {
  const initialState: State = {
    memoList: [{ id: '1', content: 'hello' }, { id: '2', content: 'goodbye' }],
  };
  it('selectMemoList', () => {
    expect(selectMemoList.projector(initialState)).toEqual(initialState.memoList);
  });
});
