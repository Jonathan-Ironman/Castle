import { Action, createReducer, on } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';
import { MissionActions } from '../actions/mission.actions';

export type MissionState = Readonly<{
  activeMissions: readonly Mission[];
}>;

export const initialState: MissionState = {
  activeMissions: []
};

const reducer = createReducer(
  initialState,
  on(MissionActions.addActiveMission, (state, payload) => {
    const activeMissions = [...state.activeMissions, payload.mission];
    return { ...state, activeMissions };
  }),
  on(MissionActions.removeActiveMission, (state, payload) => {
    const activeMissions = state.activeMissions.filter(x => x.id !== payload.mission.id);
    return { ...state, activeMissions };
  }),
);

export function missionReducer(state: MissionState | undefined, action: Action) {
  return reducer(state, action);
}
