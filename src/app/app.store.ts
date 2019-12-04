import { Hero } from './models/hero';

export interface AppState {
  gold: number;
  heroes: Array<Hero>;
}

export const appState: AppState = {
  gold: 0,
  heroes: []
};
