import { createAction, props } from '@ngrx/store';
import { Hero } from 'src/app/models/hero.model';
import { Mission } from '../../models/mission.model';

export const HeroActions = {
  addHero: createAction('[Hero] Add hero', props<{ hero: Hero }>()),
  // deleteHero: createAction('[Hero] Delete hero', (id: Hero['id']) => ({ payload: id })),
  hireHero: createAction('[Hero] Hire hero', props<{ hero: Hero }>()),
  addRecruitableHero: createAction('[Hero] Add recruitable hero', props<{ hero: Hero }>()),
  removeRecruitableHero: createAction('[Hero] Remove recruitable hero', props<{ hero: Hero }>()),
  assignMissionToHero: createAction('[Hero] Assign mission to hero', props<{ missionId: Mission['id'], hero: Hero }>()),
  unassignMissionFromHero: createAction('[Hero] Unassign mission', props<{ hero: Hero }>()),
};
