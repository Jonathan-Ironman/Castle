import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';
import { uniqueMissions } from '../misc/missions';
import { ReportType } from '../misc/report-type.enum';
import { Hero } from '../models/hero.model';
import { Report } from '../models/report.model';
import { HeroActions } from '../store/actions/hero.actions';
import { MissionActions } from '../store/actions/mission.actions';
import { ReportActions } from '../store/actions/report.actions';
import { ResourceActions } from '../store/actions/resource.actions';
import { AppState } from '../store/reducers';
import { HeroSelectors } from '../store/selectors/hero.selector';
import { ResourceSelectors } from '../store/selectors/resource.selector';
import { HeroService } from './hero.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  heroes: readonly Hero[];
  gold: Readonly<number>;
  private init = false;

  constructor(private store: Store<AppState>, private heroService: HeroService) {
    store.select(HeroSelectors.hiredHeroes).subscribe(
      heroes => this.heroes = heroes
    );
    store.select(ResourceSelectors.gold).subscribe(
      gold => this.gold = gold
    );
  }

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
    // TODO ADVENTUUUURE
    this.createReport('Ooh wee', 'Mad adventures did you have');
  }

  gameInit() {
    if (this.init) {
      return;
    }

    this.createReport('Welcome', 'Today you found a castle, you now own a castle.');
    uniqueMissions.forEach(this.addActiveMission.bind(this));

    for (let i = 0; i < 4; i++) {
      this.addRecruitableHero(this.heroService.createHero(1));
    }

    this.init = true;
  }
}
