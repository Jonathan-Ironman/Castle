import { ActionReducerMap, createFeatureSelector, MetaReducer } from '@ngrx/store';
import { gameReducer, GameState } from './game.reducer';
import { heroReducer, HeroState } from './hero.reducer';
import { missionReducer, MissionState } from './mission.reducer';
import { reportReducer, ReportState } from './report.reducer';
import { resourceReducer, ResourceState } from './resource.reducer';
import { environment } from 'src/environments/environment';

export interface AppState {
  resources: ResourceState;
  heroes: HeroState;
  reports: ReportState;
  game: GameState;
  missions: MissionState;
}

export const reducers: ActionReducerMap<AppState> = {
  resources: resourceReducer,
  heroes: heroReducer,
  reports: reportReducer,
  game: gameReducer,
  missions: missionReducer,
};

export const selectHeroState = createFeatureSelector<AppState, HeroState>('heroes');
export const selectResourceState = createFeatureSelector<AppState, ResourceState>('resources');
export const selectReportState = createFeatureSelector<AppState, ReportState>('reports');
export const selectGameState = createFeatureSelector<AppState, GameState>('game');
export const selectMissionState = createFeatureSelector<AppState, MissionState>('missions');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
