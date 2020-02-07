import { createAction } from '@ngrx/store';

export const ResourceActions = {
  addGold: createAction('[Resource] Add gold', (payload: number) => ({ payload })),
  subtractGold: createAction('[Resource] Substract gold', (payload: number) => ({ payload }))
};



