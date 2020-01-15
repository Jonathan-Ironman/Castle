import { Action, createReducer, on } from '@ngrx/store';
import { ResourceActions } from '../actions/resource.actions';

// export const resourceFeatureKey = 'resource';

export interface ResourceState {
  gold: number;
}

export const initialState: ResourceState = {
  gold: 1000
};

const reducer = createReducer(
  initialState,
  on(ResourceActions.addGold,
    (state, { payload }) => ({ ...state, gold: state.gold + payload }))
);

export function resourceReducer(state: ResourceState | undefined, action: Action) {
  return reducer(state, action);
}
