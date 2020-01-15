import { resourceReducer, initialState } from './resource.reducer';

describe('Resource Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = resourceReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
