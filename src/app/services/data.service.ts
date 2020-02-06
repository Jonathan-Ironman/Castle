import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../store/reducers';
import { debounceTime } from 'rxjs/operators';

export const localStorageKey = 'gameState';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private store: Store<AppState>) {
    // TODO: effect? meta?
    this.store.select(state => state)
      .pipe(debounceTime(100))
      .subscribe(state => DataService.saveGameState(state));
  }

  static hasData() {
    return localStorage.getItem(localStorageKey) !== null;
  }

  static clearData() {
    localStorage.removeItem(localStorageKey);
  }

  static saveGameState(state: AppState) {
    localStorage.setItem(localStorageKey, JSON.stringify(state));
  }

  static loadData() {
    return JSON.parse(localStorage.getItem(localStorageKey) || null);
  }
}
