import { createAction, props } from '@ngrx/store';

export const GameActions = {
  addTick: createAction('[Game] Increase time'),
  incrementHeroId: createAction('[Game] Increment Hero ID'),
  incrementMissionId: createAction('[Game] Increment Mission ID'),
  incrementReportId: createAction('[Game] Increment Report ID'),
};
