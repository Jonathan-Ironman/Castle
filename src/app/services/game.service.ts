import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Hero } from '../models/hero.model';
import { HeroActions } from '../store/actions/hero.actions';
import { ResourceActions } from '../store/actions/resource.actions';
import { AppState } from '../store/reducers';
import { HeroService } from './hero.service';
import { Report } from '../models/report.model';
import { ReportActions } from '../store/actions/report.actions';
import { ReportType } from '../misc/report-type.enum';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gold$: Observable<Readonly<number>>;
  heroes$: Observable<readonly Hero[]>;
  reports$: Observable<readonly Report[]>;
  recruitableHeroes$: Observable<readonly Hero[]>;
  heroes: readonly Hero[];

  addGold(amount: number) {
    this.store.dispatch(ResourceActions.addGold(amount));
  }

  hireHero(hero: Hero) {
    this.store.dispatch(HeroActions.hireHero(hero));
  }

  addRecruitableHero(hero: Hero) {
    this.store.dispatch(HeroActions.addRecruitableHero(hero));
  }

  createReport(title: string, text: string) {
    const id = 1;
    const tick = 1;
    const type = ReportType.mission;
    const report = new Report({ id, title, text, tick, reportType: type });

    this.store.dispatch(ReportActions.addReport(report));
  }

  handleTick() {
    this.createReport('Ooh wee', 'Mad adventures did you have');
  }

  constructor(private store: Store<AppState>, heroService: HeroService) {
    this.gold$ = store.select(state => state.resources.gold);
    this.heroes$ = store.select(state => state.heroes.myHeroes);
    this.recruitableHeroes$ = store.select(state => state.heroes.recruitableHeroes);
    this.reports$ = store.select(state => state.reports);

    // Uuuuuh
    this.heroes$.subscribe(heroes => (this.heroes = heroes));

    this.createReport('Yaaa', '');
    this.createReport('', 'Eheheee');
    this.createReport('Welcome', 'Today you found a castle, you now own a castle.');

    for (let i = 0; i < 3; i++) {
      this.hireHero(heroService.createHero(1));
    }

    for (let i = 0; i < 6; i++) {
      this.addRecruitableHero(heroService.createHero(1));
    }
  }
}
