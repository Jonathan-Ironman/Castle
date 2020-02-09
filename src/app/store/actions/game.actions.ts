import { createAction, props } from '@ngrx/store';

export const GameActions = {
  tick: createAction('[Game] Increase time'),
  incrementHeroId: createAction('[Game] Increment Hero ID'),
  incrementMissionId: createAction('[Game] Increment Mission ID'),
  incrementReportId: createAction('[Game] Increment Report ID'),
  addReputation: createAction('[Game] Add reputation', (amount: number) => ({ amount })),
  subtractReputation: createAction('[Game] Substract reputation', (amount: number) => ({ amount })),
  incrementHeroDeathCounter: createAction('[Game] Increment Hero death counter'),
};
