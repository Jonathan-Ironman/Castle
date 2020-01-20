import { ActionReducerMap, MetaReducer, createFeatureSelector, createSelector } from '@ngrx/store';
import { environment } from 'src/environments/environment';
import { heroReducer, HeroState } from './hero.reducer';
import { resourceReducer, ResourceState } from './resource.reducer';

export const appFeatureKey = 'app';

export interface AppState {
  resources: ResourceState;
  heroes: HeroState;
}

export const reducers: ActionReducerMap<AppState> = {
  resources: resourceReducer,
  heroes: heroReducer
};

export const selectHeroState = createFeatureSelector<AppState, HeroState>('heroes');
export const selectResourceState = createFeatureSelector<AppState, ResourceState>('resources');

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
