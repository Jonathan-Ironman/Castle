import { createAction } from '@ngrx/store';

export const ResourceActions = {
  addGold: createAction(
    '[Resource] Add gold',
    (payload: number) => ({ payload }))
};



