import { createAction, props } from '@ngrx/store';

export const GameActions = {
  addTick: createAction('[Game] Increase time'),
};
