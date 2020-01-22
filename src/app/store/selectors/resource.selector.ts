import { createSelector } from '@ngrx/store';
import { selectResourceState } from '../reducers/index';

export const ResourceSelectors = {
    gold: createSelector(selectResourceState, state => state.gold),
};
