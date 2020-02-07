import { Action, createReducer, on } from '@ngrx/store';
import { GameActions } from '../actions/game.actions';

export type GameState = Readonly<{
  tick: number;
  heroId: number;
  missionId: number;
  reportId: number;
}>;

export const initialState: GameState = {
  tick: 1,
  heroId: 0,
  missionId: 0,
  reportId: 0
};

const reducer = createReducer(
  initialState,
  on(GameActions.addTick, (state) => {
    return { ...state, tick: state.tick + 1 };
  }),
  on(GameActions.incrementHeroId, (state) => {
    return { ...state, heroId: state.heroId + 1 };
  }),
  on(GameActions.incrementMissionId, (state) => {
    return { ...state, missionId: state.missionId + 1 };
  }),
  on(GameActions.incrementReportId, (state) => {
    return { ...state, reportId: state.reportId + 1 };
  }),
);

export function gameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
