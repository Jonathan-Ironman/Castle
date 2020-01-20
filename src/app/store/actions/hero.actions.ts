import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/models/hero.model';
import { Mission } from '../../models/mission.model';

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
  assignMissionToHero: createAction(
    '[Hero] Assign mission to hero',
    props<{ mission: Mission, hero: Hero }>()),
  unassignMissionFromHero: createAction(
    '[Hero] Unassign mission',
    props<{ hero: Hero }>()),
};
