import { Action, createReducer, on } from '@ngrx/store';
import { HeroActions } from '../actions/hero.actions';
import { Hero } from 'src/app/models/hero.model';

// TODO: merge fields maybe
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
  on(HeroActions.hireHero, (state, payload) => {
    const myHeroes = [...state.myHeroes, payload.hero];
    return { ...state, myHeroes };
  }),
  on(HeroActions.addRecruitableHero, (state, payload) => {
    const recruitableHeroes = [...state.recruitableHeroes, payload.hero];
    return { ...state, recruitableHeroes };
  }),
  on(HeroActions.removeRecruitableHero, (state, payload) => {
    const recruitableHeroes = state.recruitableHeroes.filter(x => x.id !== payload.hero.id);
    return { ...state, recruitableHeroes };
  }),
  on(HeroActions.removeHiredHero, (state, payload) => {
    const myHeroes = state.myHeroes.filter(x => x.id !== payload.hero.id);
    return { ...state, myHeroes };
  }),
  on(HeroActions.assignMissionToHero, (state, payload) => {
    const updatedHero = { ...payload.hero, assignment: payload.missionId };
    const heroes = Array.from(state.myHeroes)
      .map(hero =>
        updatedHero.id === hero.id &&
        updatedHero ||
        hero);
    return { ...state, myHeroes: heroes };
  }),
  on(HeroActions.unassignMissionFromHero, (state, payload) => {
    const updatedHero = { ...payload.hero };
    delete updatedHero.assignment;
    const heroes = Array.from(state.myHeroes)
      .map(hero =>
        updatedHero.id === hero.id &&
        updatedHero ||
        hero);
    return { ...state, myHeroes: heroes };
  })
);

export function heroReducer(state: HeroState | undefined, action: Action) {
  return reducer(state, action);
}
