import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { heroReducer, HeroState } from './hero.reducer';
import { resourceReducer, ResourceState } from './resource.reducer';
import { reportReducer, ReportState } from './report.reducer';

export interface AppState {
  resources: ResourceState;
  heroes: HeroState;
  reports: ReportState;
}

export const reducers: ActionReducerMap<AppState> = {
  resources: resourceReducer,
  heroes: heroReducer,
  reports: reportReducer
};

export const selectHeroState = createFeatureSelector<AppState, HeroState>('heroes');
export const selectResourceState = createFeatureSelector<AppState, ResourceState>('resources');
export const selectReportState = createFeatureSelector<AppState, ReportState>('reports');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
