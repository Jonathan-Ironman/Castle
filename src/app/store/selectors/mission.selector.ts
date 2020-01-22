import { createSelector } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';
import { selectMissionState } from '../reducers';

const activeMissions = createSelector(selectMissionState, state => state.activeMissions);
const missionById = (id: Mission['id']) => createSelector(activeMissions, missions => missions.find(m => m.id === id));

export const MissionSelectors = {
    activeMissions,
    missionById,
};
