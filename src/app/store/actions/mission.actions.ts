import { createAction, props } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';

export const MissionActions = {
  addActiveMission: createAction('[Mission] Add active mission', props<{ mission: Mission }>()),
  removeActiveMission: createAction('[Mission] Remove active mission', props<{ mission: Mission }>())
};
