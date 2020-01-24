import { Injectable } from '@angular/core';
import { AppState } from '../store/reducers/index';
import { Store } from '@ngrx/store';
import { debounceTime } from 'rxjs/operators';
import { merge, of } from 'rxjs';

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
    return localStorage.getItem('gameState') !== null;
  }

  clearData() {
    return localStorage.removeItem('gameState');
  }

  async saveGameState(state: AppState) {
    localStorage.setItem('gameState', JSON.stringify(state));
  }

  loadData() {
    // TODO
    // const data = JSON.parse(localStorage.getItem('gameState'));
    // merge(this.store, of(data));
  }
}
