import { Injectable } from '@angular/core';
import { AppState } from '../app.store';
import { Store } from '@ngrx/store';
import { ACTION_ADD_GOLD, ACTION_ADD_HERO } from '../store/actions/actions';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gold$: Observable<number>;
  heroes$: Observable<Array<Hero>>;

  addGold(amount: number) {
    this.store.dispatch(new ACTION_ADD_GOLD(amount));
  }

  addHero(hero: Hero) {
    this.store.dispatch(new ACTION_ADD_HERO(hero));
  }

  constructor(private store: Store<AppState[]>) {
    this.gold$ = store.select(state => state[0].gold);
    this.heroes$ = store.select(state => state[0].heroes);

    this.addGold(1000);
    this.addHero({
      id: 1,
      name: 'Bertrand the Slow',
      level: 1,
      combat: 1,
      tactics: 1,
      valor: 1
    });
  }
}
