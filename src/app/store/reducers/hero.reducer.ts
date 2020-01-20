import { Action, createReducer, on } from '@ngrx/store';
import { HeroActions } from '../actions/hero.actions';
import { Hero } from 'src/app/models/hero.model';

// export const heroFeatureKey = 'hero';

export interface HeroState {
  myHeroes: Array<Hero>;
  recruitableHeroes: Array<Hero>;
}

export const initialState: HeroState = {
  myHeroes: [],
  recruitableHeroes: []
};

const reducer = createReducer(
  initialState,
  on(HeroActions.hireHero, (state, hero) => {
    state.myHeroes.push(hero);
    return state;
  }),
  on(HeroActions.addRecruitableHero, (state, hero) => {
    state.recruitableHeroes.push(hero);
    return state;
  }),
  on(HeroActions.removeRecruitableHero, (state, hero) => {
    state.recruitableHeroes = state.recruitableHeroes.filter(x => x.id !== hero.id);
    return state;
  })
);

export function heroReducer(state: HeroState | undefined, action: Action) {
  return reducer(state, action);
}
