import { missionReducer, initialState } from './mission.reducer';

describe('Mission Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = missionReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
