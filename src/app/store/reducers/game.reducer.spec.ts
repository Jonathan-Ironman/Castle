import { gameReducer, initialState } from './game.reducer';
import { GameActions } from '../actions/game.actions';

describe('Game Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = gameReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should return tick + 1', () => {
    const action = GameActions.addTick();
    const result = gameReducer(initialState, action);
    expect(result.tick).toBe(initialState.tick + 1);
  });

  it('should return heroId + 1', () => {
    const action = GameActions.incrementHeroId();
    const result = gameReducer(initialState, action);
    expect(result.heroId).toBe(initialState.heroId + 1);
  });

  it('should return missionId + 1', () => {
    const action = GameActions.incrementMissionId();
    const result = gameReducer(initialState, action);
    expect(result.missionId).toBe(initialState.missionId + 1);
  });

  it('should return reportId + 1', () => {
    const action = GameActions.incrementReportId();
    const result = gameReducer(initialState, action);
    expect(result.reportId).toBe(initialState.reportId + 1);
  });
});
