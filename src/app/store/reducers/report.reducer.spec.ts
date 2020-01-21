import { reportReducer, initialState } from './report.reducer';

describe('Report Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = reportReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
