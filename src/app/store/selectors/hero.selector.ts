import { createSelector } from '@ngrx/store';
import { selectHeroState } from '../reducers/index';

const hiredHeroes = createSelector(selectHeroState, state => state.myHeroes);

export const HeroSelectors = {
    hiredHeroes,
    recruitableHeroes: createSelector(selectHeroState, state => state.recruitableHeroes),
    heroAssignments: createSelector(hiredHeroes, heroes => heroes
        .filter(h => !!h.assignment)
        .map(h => ({ heroId: h.id, missionId: h.assignment }))
    )
};
