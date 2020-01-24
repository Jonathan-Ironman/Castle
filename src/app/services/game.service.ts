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
import { MissionSelectors } from '../store/selectors/mission.selector';
import { RewardType } from '../models/reward.model';
import { TextHelpers as TH } from '../misc/text-helper';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private hiredHeroes: readonly Hero[];
  private gold: Readonly<number>;
  private missionsWithAssignments: readonly Mission[];
  private init = false;

  constructor(
    private store: Store<AppState>,
    private heroService: HeroService,
    private dataService: DataService
  ) {
    store.select(HeroSelectors.hiredHeroes).subscribe(
      heroes => this.hiredHeroes = heroes
    );
    store.select(ResourceSelectors.gold).subscribe(
      gold => this.gold = gold
    );
    store.select(MissionSelectors.missionsWithAssignments).subscribe(
      missionsWithAssignments => this.missionsWithAssignments = missionsWithAssignments
    );
  }

  addGold(amount: number) {
    this.store.dispatch(ResourceActions.addGold(amount));
  }

  hireHero(hero: Hero) {
    this.store.dispatch(HeroActions.hireHero({ hero }));
  }

  addRecruitableHero(hero: Hero) {
    this.store.dispatch(HeroActions.addRecruitableHero({ hero }));
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

  handleMissionRewards(mission: Mission): string[] {
    const rewardLog = [];
    mission.rewards.forEach(r => {
      switch (r.type) {
        case RewardType.gold:
          rewardLog.push(`You gained ${r.amount} gold.`);
          this.store.dispatch(ResourceActions.addGold(r.amount));
          break;
        case RewardType.boost:
          rewardLog.push(`Something good happened`);
          break;
        case RewardType.insight:
          rewardLog.push(`You've learned something interesting`);
          break;
        default:
          throw new Error('Unknown reward type');
      }
    });

    return rewardLog;
  }

  handleMission(mission: Mission) {
    const heroes = this.hiredHeroes.filter(h => h.assignment === mission.id);
    const combat = heroes.reduce((accumulator, hero) => accumulator + hero.combat, 0);
    const valor = heroes.reduce((accumulator, hero) => accumulator + hero.valor, 0);
    const tactics = heroes.reduce((accumulator, hero) => accumulator + hero.tactics, 0);
    const adversity = mission.adversity;

    if ((combat + tactics) / 2 > adversity.combat + adversity.tactics) {
      const rewardLog = this.handleMissionRewards(mission);
      this.createReport('Glorious victory!',
        [`\n${TH.listAnd(heroes.map(h => h.name))} crushed mission ${mission.title}!`,
        ...rewardLog].join('\n'));
      this.store.dispatch(MissionActions.removeActiveMission(mission));
      return;
    }

    if (combat + tactics < (adversity.combat + adversity.tactics) / 2) {
      this.createReport('Massacred!',
        `${TH.listAnd(heroes.map(h => h.name))} are killed in mission ${mission.title}!`);
      // TODO kill em
      return;
    }

    this.createReport('Happenings',
      `${TH.listAnd(heroes.map(h => h.name))} did things in mission ${mission.title}!`);
  }

  handleTick() {
    this.missionsWithAssignments.forEach(this.handleMission.bind(this));
    this.createReport('Ooh wee', 'Mad adventures did you have');
  }

  gameInit() {
    if (this.init) {
      return;
    }

    if (this.dataService.hasData()) {
      this.dataService.loadData();
      this.init = true;
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
