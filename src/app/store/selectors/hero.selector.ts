import { createSelector } from '@ngrx/store';
import { selectHeroState } from '../reducers/index';

export const HeroSelectors = {
    hiredHeroes: createSelector(selectHeroState, state => state.myHeroes),
    recruitableHeroes: createSelector(selectHeroState, state => state.recruitableHeroes),
};
