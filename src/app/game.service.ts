import { Injectable } from '@angular/core';
import { appState } from './app.store';
import { Store } from '@ngrx/store';
import { ACTION_ADD_GOLD } from './store/actions/actions';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  getGoldCount() {
    // TODO: typed
    return this.store.select('resourceReducer');
  }

  private tick() {
    this.store.dispatch(new ACTION_ADD_GOLD());
  }

  constructor(private store: Store<any>) {
    window.setInterval(this.tick.bind(this), 1000);
  }
}
