import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';

export const HeroActions = {
  hireHero: createAction(
    '[Hero] Hire hero',
    props<Hero>()),
  addRecruitableHero: createAction(
    '[Hero] Add recruitable hero',
    props<Hero>()),
  removeRecruitableHero: createAction(
    '[Hero] Remove recruitable hero',
    props<Hero>()),
};
