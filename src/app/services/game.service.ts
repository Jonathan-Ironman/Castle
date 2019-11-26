import { Injectable } from '@angular/core';
import { AppStore } from '../app.store';
import { Store } from '@ngrx/store';
import { ACTION_ADD_GOLD } from '../store/actions/actions';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gold$: Observable<number>;

  private tick() {
    this.store.dispatch(new ACTION_ADD_GOLD(10));
  }

  constructor(private store: Store<AppStore>) {
    window.setInterval(this.tick.bind(this), 1000);
    this.gold$ = store.select(state => state[0].gold);
  }
}
