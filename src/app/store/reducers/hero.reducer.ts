import { Action, createReducer, on } from '@ngrx/store';
import { HeroActions } from '../actions/hero.actions';
import { Hero } from 'src/app/models/hero.model';

// export const heroFeatureKey = 'hero';

export interface HeroState {
  myHeroes: Readonly<Array<Hero>>;
  recruitableHeroes: Readonly<Array<Hero>>;
}

export const initialState: Readonly<HeroState> = {
  myHeroes: [],
  recruitableHeroes: []
};

const reducer = createReducer(
  initialState,
  on(HeroActions.hireHero, (state, hero) => {
    const myHeroes = [...state.myHeroes, hero];
    return { ...state, myHeroes };
  }),
  on(HeroActions.addRecruitableHero, (state, hero) => {
    const recruitableHeroes = [...state.recruitableHeroes, hero];
    return { ...state, recruitableHeroes };
  }),
  on(HeroActions.removeRecruitableHero, (state, hero) => {
    const recruitableHeroes = state.recruitableHeroes.filter(x => x.id !== hero.id);
    return { ...state, recruitableHeroes };
  }),
  on(HeroActions.assignMissionToHero, (state, payload) => {
    payload.hero.assignment = payload.mission;
    return state;
  }),
  on(HeroActions.unassignMissionFromHero, (state, payload) => {
    delete payload.hero.assignment;
    return state;
  })
);

export function heroReducer(state: HeroState | undefined, action: Action) {
  return reducer(state, action);
}
