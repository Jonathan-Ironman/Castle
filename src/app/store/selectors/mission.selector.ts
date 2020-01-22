import { createSelector } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';
import { selectMissionState } from '../reducers';
import { HeroSelectors } from './hero.selector';

const activeMissions = createSelector(selectMissionState, missionState => missionState.activeMissions);
const missionById = (id: Mission['id']) => createSelector(activeMissions, missions => missions.find(m => m.id === id));
const missionsWithAssignments = createSelector(HeroSelectors.heroAssignments, assignments =>
    Array.from(new Set(assignments.map(a => a.missionId)))
);

export const MissionSelectors = {
    activeMissions,
    missionById,
    missionsWithAssignments,
};
