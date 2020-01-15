import { ActionReducerMap, MetaReducer } from '@ngrx/store';
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

export const metaReducers: MetaReducer<AppState>[] = !environment.production ? [] : [];
