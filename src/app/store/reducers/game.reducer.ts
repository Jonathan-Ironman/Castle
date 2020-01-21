import { Action, createReducer, on } from '@ngrx/store';
import { GameActions } from '../actions/game.actions';

export type GameState = Readonly<{
  tick: number;
}>;

export const initialState: GameState = {
  tick: 1
};

const reducer = createReducer(
  initialState,
  on(GameActions.addTick, (state) => {
    const tick = state.tick + 1;
    return { ...state, tick };
  }),
);

export function gameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
