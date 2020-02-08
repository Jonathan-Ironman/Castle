import { createAction } from '@ngrx/store';

export const ResourceActions = {
  addGold: createAction('[Resource] Add gold', (amount: number) => ({ amount })),
  subtractGold: createAction('[Resource] Substract gold', (amount: number) => ({ amount }))
};



