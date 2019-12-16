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
  heroes: Hero[];

  adventure() {
    const adventuringHeroes = this.heroes.filter(
      hero => hero.action === 'adventure'
    );
    window.alert(
      'Adventure awaits for ' +
        adventuringHeroes.map(hero => hero.name).join(', ')
    );
  }

  addGold(amount: number) {
    this.store.dispatch(new ACTION_ADD_GOLD(amount));
  }

  addHero(hero: Hero) {
    this.store.dispatch(new ACTION_ADD_HERO(hero));
  }

  constructor(private store: Store<AppState[]>) {
    this.gold$ = store.select(state => state[0].gold);
    this.heroes$ = store.select(state => state[0].heroes);
    // Uuuuuh
    this.heroes$.subscribe(heroes => (this.heroes = heroes));

    this.addGold(1000);
    this.addHero({
      id: 1,
      name: 'Bertrand the Slow',
      level: 1,
      combat: 1,
      tactics: 1,
      valor: 1,
      action: 'rest'
    });
    this.addHero({
      id: 2,
      name: 'Paul the Rapist',
      level: 1,
      combat: 1,
      tactics: 1,
      valor: 1,
      action: 'rest'
    });
    this.addHero({
      id: 3,
      name: 'William the Loud',
      level: 1,
      combat: 1,
      tactics: 1,
      valor: 1,
      action: 'rest'
    });
  }
}
