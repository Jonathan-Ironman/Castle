import { Injectable } from '@angular/core';
import { AppState } from '../app.store';
import { Store } from '@ngrx/store';
import { ACTION_ADD_GOLD, ACTION_ADD_HERO, ACTION_ADD_RECRUITABLE_HERO } from '../store/actions/actions';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gold$: Observable<number>;
  heroes$: Observable<Array<Hero>>;
  recruitableHeroes$: Observable<Array<Hero>>;
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

  addRecruitableHero(hero: Hero) {
    this.store.dispatch(new ACTION_ADD_RECRUITABLE_HERO(hero));
  }

  constructor(private store: Store<AppState[]>, private heroService: HeroService) {
    this.gold$ = store.select(state => state[0].gold);
    this.heroes$ = store.select(state => state[0].heroes);
    this.recruitableHeroes$ = store.select(state => state[0].recruitableHeroes);
    // Uuuuuh
    this.heroes$.subscribe(heroes => (this.heroes = heroes));

    this.addGold(1000);

    this.addHero(heroService.createHero(1));
    this.addHero(heroService.createHero(1));
    this.addHero(heroService.createHero(1));

    this.addRecruitableHero(heroService.createHero(1));
    this.addRecruitableHero(heroService.createHero(1));
    this.addRecruitableHero(heroService.createHero(1));
  }
}
