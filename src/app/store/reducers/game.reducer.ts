import { Action, createReducer, on } from '@ngrx/store';
import { GameActions } from '../actions/game.actions';
import { Player } from 'src/app/models/player.model';

export type GameState = Readonly<{
  tick: number;
  player: Player;
  heroId: number;
  missionId: number;
  reportId: number;
}>;

export const initialState: GameState = {
  tick: 1,
  player: {
    reputation: 10
  },
  heroId: 0,
  missionId: 0,
  reportId: 0
};

const reducer = createReducer(
  initialState,
  on(GameActions.tick, state => ({ ...state, tick: state.tick + 1 })),
  on(GameActions.incrementHeroId, state => ({ ...state, heroId: state.heroId + 1 })),
  on(GameActions.incrementMissionId, state => ({ ...state, missionId: state.missionId + 1 })),
  on(GameActions.incrementReportId, state => ({ ...state, reportId: state.reportId + 1 })),
  on(GameActions.addReputation,
    (state, { amount }) => ({ ...state, player: { reputation: state.player.reputation + amount } })
  ),
  on(GameActions.subtractReputation,
    (state, { amount }) => ({ ...state, player: { reputation: state.player.reputation - amount } })
  ),
);

export function gameReducer(state: GameState | undefined, action: Action) {
  return reducer(state, action);
}
