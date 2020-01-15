import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero';
import { HeroActions } from '../store/actions/hero.actions';
import { ResourceActions } from '../store/actions/resource.actions';
import { AppState } from '../store/reducers';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gold$: Observable<number>;
  heroes$: Observable<Hero[]>;
  recruitableHeroes$: Observable<Hero[]>;
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
    this.store.dispatch(ResourceActions.addGold(amount));
  }

  addHero(hero: Hero) {
    this.store.dispatch(HeroActions.hireHero(hero));
  }

  addRecruitableHero(hero: Hero) {
    this.store.dispatch(HeroActions.addRecruitableHero(hero));
  }

  constructor(private store: Store<AppState>, heroService: HeroService) {
    this.gold$ = store.select(state => state.resources.gold);
    this.heroes$ = store.select(state => state.heroes.myHeroes);
    this.recruitableHeroes$ = store.select(state => state.heroes.recruitableHeroes);
    // Uuuuuh
    this.heroes$.subscribe(heroes => (this.heroes = heroes));

    this.addHero(heroService.createHero(1));
    this.addHero(heroService.createHero(1));
    this.addHero(heroService.createHero(1));

    this.addRecruitableHero(heroService.createHero(1));
    this.addRecruitableHero(heroService.createHero(1));
    this.addRecruitableHero(heroService.createHero(1));
  }
}
