import { resourceReducer, initialState } from './resource.reducer';
import { ResourceActions } from '../actions/resource.actions';

describe('Resource Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = resourceReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should add gold', () => {
    const action = ResourceActions.addGold(10);
    const result = resourceReducer(initialState, action);
    expect(result.gold).toEqual(initialState.gold + 10);
  });

  it('should subtract gold', () => {
    const action = ResourceActions.subtractGold(10);
    const result = resourceReducer(initialState, action);
    expect(result.gold).toEqual(initialState.gold - 10);
  });
});
