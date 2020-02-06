import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';

export const localStorageKey = 'gameState';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private store: Store<AppState>) {
    // TODO: effect?
    // this.store.select(state => state)
    //   .pipe(debounceTime(100))
    //   .subscribe(state => this.saveGameState(state));
  }

  hasData() {
    return localStorage.getItem(localStorageKey) !== null;
  }

  clearData() {
    return localStorage.removeItem(localStorageKey);
  }

  async saveGameState(state: AppState) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  loadData() {
    // TODO
    const data = JSON.parse(localStorage.getItem(localStorageKey) || null);
    // merge(this.store, of(data));
  }
}
