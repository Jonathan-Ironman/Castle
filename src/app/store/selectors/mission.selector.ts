import { createSelector } from '@ngrx/store';
import { selectMissionState } from '../reducers';

export const MissionSelectors = {
    activeMissions: createSelector(selectMissionState, state => state.activeMissions),
};
