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
});
