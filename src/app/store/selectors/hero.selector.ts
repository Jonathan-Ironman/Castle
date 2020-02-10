import { createSelector } from '@ngrx/store';
import { selectHeroState } from '../reducers/index';
import { TeamStats } from '../../models/team-stats.model';

const hiredHeroes = createSelector(selectHeroState, state => state.myHeroes);

export const HeroSelectors = {
    hiredHeroes,
    recruitableHeroes: createSelector(selectHeroState, state => state.recruitableHeroes),
    heroAssignments: createSelector(hiredHeroes, heroes => heroes
        .filter(h => !!h.assignment)
        .map(h => ({ heroId: h.id, missionId: h.assignment }))
    ),
    teamStats: createSelector(hiredHeroes, (heroes): TeamStats => {
        const [combat, tactics, valor, cost] = heroes.reduce((a, h) => {
            return [
                a[0] + h.combat,
                a[1] + h.tactics,
                a[2] + h.valor,
                a[3] + h.missionFee
            ];
        }, [0, 0, 0, 0]);
        return { combat, tactics, valor, heroCount: heroes.length, cost };
    }),
};
