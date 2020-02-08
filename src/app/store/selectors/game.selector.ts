import { createSelector } from '@ngrx/store';
import { selectGameState } from '../reducers';

export const GameSelectors = {
    tick: createSelector(selectGameState, state => state.tick),
    heroId: createSelector(selectGameState, state => state.heroId),
    missionId: createSelector(selectGameState, state => state.missionId),
    reportId: createSelector(selectGameState, state => state.reportId),
    playerReputation: createSelector(selectGameState, state => state.player.reputation),
};
