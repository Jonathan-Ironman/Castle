import { Action, createReducer, on } from '@ngrx/store';
import { ResourceActions } from '../actions/resource.actions';

// export const resourceFeatureKey = 'resource';

export interface ResourceState {
  gold: Readonly<number>;
}

export const initialState: ResourceState = {
  gold: 1000
};

const reducer = createReducer(
  initialState,
  on(ResourceActions.addGold,
    (state, { amount }) => ({ ...state, gold: state.gold + amount })),
  on(ResourceActions.subtractGold,
    (state, { amount }) => ({ ...state, gold: state.gold - amount }))
);

export function resourceReducer(state: Readonly<ResourceState> | undefined, action: Action) {
  return reducer(state, action);
}
