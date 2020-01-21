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
import { Mission } from 'src/app/models/mission.model';
import { MissionActions } from '../store/actions/mission.actions';
import { uniqueMissions } from '../misc/missions';

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

  addActiveMission(mission: Mission) {
    this.store.dispatch(MissionActions.addActiveMission(mission));
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

    this.createReport('Welcome', 'Today you found a castle, you now own a castle.');

    uniqueMissions.forEach(this.addActiveMission.bind(this));

    for (let i = 0; i < 4; i++) {
      this.addRecruitableHero(heroService.createHero(1));
    }
  }
}
