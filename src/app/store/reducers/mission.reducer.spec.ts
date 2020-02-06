import { missionReducer, initialState } from './mission.reducer';
import { MissionActions } from '../actions/mission.actions';
import { uniqueMissions } from '../../misc/missions';

describe('Mission Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = missionReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should add active missions', () => {
    const mission = uniqueMissions[0];
    const action = MissionActions.addActiveMission({ mission });
    const state = {
      activeMissions: []
    };
    const result = missionReducer(state, action);
    expect(result.activeMissions[0]).toEqual(mission);
  });

  it('should remove active missions', () => {
    const mission = uniqueMissions[0];
    const action = MissionActions.removeActiveMission({ mission });
    const state = {
      activeMissions: [mission]
    };
    const result = missionReducer(state, action);
    expect(result.activeMissions).toEqual([]);
  });
});
