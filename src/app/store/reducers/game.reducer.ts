import { Action, createReducer, on } from '@ngrx/store';
import { GameActions } from '../actions/game.actions';

export type GameState = Readonly<{
  tick: number;
  heroId: number;
  missionId: number;
  reportId: number;
  playerReputation: number;
  heroDeaths: number;
}>;

export const initialState: GameState = {
  tick: 1,
  heroId: 0,
  missionId: 0,
  reportId: 0,
  playerReputation: 10,
  heroDeaths: 0,
};

const reducer = createReducer(
  initialState,
  on(GameActions.tick, state => ({ ...state, tick: state.tick + 1 })),
  on(GameActions.incrementHeroId, state => ({ ...state, heroId: state.heroId + 1 })),
  on(GameActions.incrementMissionId, state => ({ ...state, missionId: state.missionId + 1 })),
  on(GameActions.incrementReportId, state => ({ ...state, reportId: state.reportId + 1 })),
  on(GameActions.addReputation, (state, { amount }) => ({ ...state, playerReputation: state.playerReputation + amount })),
  on(GameActions.subtractReputation, (state, { amount }) => ({ ...state, playerReputation: state.playerReputation - amount })),
  on(GameActions.incrementHeroDeathCounter, state => ({ ...state, heroDeaths: state.heroDeaths + 1 })),
);

export function gameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
