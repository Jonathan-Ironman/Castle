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
import { DataActions } from '../store/actions/data.actions';
import { GameSelectors } from '../store/selectors/game.selector';
import { GameActions } from '../store/actions/game.actions';
import { MathHelpers } from '../misc/math-helpers';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  // tslint:disable: variable-name
  private _heroId: Readonly<number>;
  private _missionId: Readonly<number>;
  private _reportId: Readonly<number>;
  // tslint:enable: variable-name
  private hiredHeroes: readonly Hero[];
  private recruitableHeroes: readonly Hero[];
  private gold: Readonly<number>;
  private tick: Readonly<number>;
  private playerReputation: Readonly<number>;
  private heroDeaths: Readonly<number>;
  private missionsWithAssignments: readonly Mission[];
  private init = false;

  get nextHeroId() {
    this.store.dispatch(GameActions.incrementHeroId());
    return this._heroId;
  }

  get nextMissionId() {
    this.store.dispatch(GameActions.incrementMissionId());
    return this._missionId;
  }

  get nextReportId() {
    this.store.dispatch(GameActions.incrementReportId());
    return this._reportId;
  }

  constructor(
    private store: Store<AppState>,
    private dataService: DataService
  ) {
    store.select(HeroSelectors.hiredHeroes).subscribe(heroes => this.hiredHeroes = heroes);
    store.select(HeroSelectors.recruitableHeroes).subscribe(heroes => this.recruitableHeroes = heroes);
    store.select(ResourceSelectors.gold).subscribe(gold => this.gold = gold);
    store.select(MissionSelectors.missionsWithAssignments).subscribe(
      missionsWithAssignments => this.missionsWithAssignments = missionsWithAssignments);
    store.select(GameSelectors.tick).subscribe(tick => this.tick = tick);
    store.select(GameSelectors.heroId).subscribe(heroId => this._heroId = heroId);
    store.select(GameSelectors.missionId).subscribe(missionId => this._missionId = missionId);
    store.select(GameSelectors.reportId).subscribe(reportId => this._reportId = reportId);
    store.select(GameSelectors.playerReputation).subscribe(playerReputation => this.playerReputation = playerReputation);
    store.select(GameSelectors.heroDeaths).subscribe(heroDeaths => this.heroDeaths = heroDeaths);
  }

  addGold(amount: number) {
    this.store.dispatch(ResourceActions.addGold(amount));
  }

  subtractGold(amount: number) {
    this.store.dispatch(ResourceActions.subtractGold(amount));
  }

  addReputation(amount: number) {
    this.store.dispatch(GameActions.addReputation(amount));
  }

  subtractReputation(amount: number) {
    this.store.dispatch(GameActions.subtractReputation(amount));
  }

  incrementHeroDeathCounter() {
    this.store.dispatch(GameActions.incrementHeroDeathCounter());
  }

  createHero(level: number) {
    return HeroService.generateHero(this.nextHeroId, level);
  }

  hireHero(hero: Hero) {
    this.store.dispatch(HeroActions.hireHero({ hero }));
    this.store.dispatch(HeroActions.removeRecruitableHero({ hero }));
    this.store.dispatch(ResourceActions.subtractGold(hero.hiringFee));
    this.createReport('New hero', `Hired ${hero.name} for ${hero.hiringFee} gold`, ReportType.recruitment);
  }

  removeHiredHero(hero: Hero) {
    this.store.dispatch(HeroActions.removeHiredHero({ hero }));
  }

  unassignMissionFromHero(hero: Hero) {
    this.store.dispatch(HeroActions.unassignMissionFromHero({ hero }));
  }

  addRecruitableHero(hero: Hero) {
    this.store.dispatch(HeroActions.addRecruitableHero({ hero }));
  }

  addActiveMission(mission: Mission) {
    this.store.dispatch(MissionActions.addActiveMission({ mission }));
  }

  createReport(title: string, text: string, type: ReportType) {
    const report = new Report({
      id: this.nextReportId,
      title,
      text,
      tick: this.tick,
      reportType: type
    });
    this.store.dispatch(ReportActions.addReport({ report }));
  }

  handleMissionRewards(mission: Mission): string[] {
    const rewardLog = [];
    mission.rewards.forEach(r => {
      switch (r.type) {
        case RewardType.gold:
          rewardLog.push(`You gained ${r.amount} gold.`);
          this.addGold(r.amount);
          break;
        case RewardType.boost:
          rewardLog.push(`Something good happened`);
          break;
        case RewardType.insight:
          rewardLog.push(`You've learned something interesting`);
          break;
        case RewardType.reputation:
          const adjective = r.amount > 5 && ' significantly' || '';
          rewardLog.push(`Your reputation increased` + adjective);
          this.addReputation(r.amount);
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

    // Subtract fees and unassign missions
    heroes.forEach(h => {
      this.unassignMissionFromHero(h);
      this.subtractGold(h.missionFee);
    });

    if ((combat + tactics) / 2 > adversity.combat + adversity.tactics) {
      const rewardLog = this.handleMissionRewards(mission);
      this.createReport('Glorious victory!',
        [`\n${TH.listAnd(heroes.map(h => h.name))} crushed mission ${mission.title}!`,
        ...rewardLog].join('\n'),
        ReportType.mission
      );
      // Mission complete
      this.store.dispatch(MissionActions.removeActiveMission({ mission }));
    } else if (combat + tactics < (adversity.combat + adversity.tactics) / 2) {
      this.createReport('Massacred!',
        `${TH.listAnd(heroes.map(h => h.name))} ${TH.singularPlural(heroes, 'is', 'are')} killed in mission ${mission.title}!`,
        ReportType.mission
      );
      // Kill them
      heroes.forEach(h => {
        this.incrementHeroDeathCounter();
        this.subtractReputation(h.level);
        this.createReport('K.I.A.', `${h.name} died`, ReportType.event);
        this.removeHiredHero(h);
      });
    } else {
      this.createReport('Happenings',
        `${TH.listAnd(heroes.map(h => h.name))} did things in mission ${mission.title}!`,
        ReportType.mission
      );
    }
  }

  preTickEvents() {
    const abort = false;
    return abort;
  }

  postTickEvents() {
    // New recruits
    let heroLevel = 0;
    if (this.hiredHeroes.length <= 4 && this.recruitableHeroes.length <= 3 && MathHelpers.chance(10)) {
      heroLevel = HeroService.getHeroLevelForReputation(this.playerReputation);
    } else if (this.hiredHeroes.length <= 2 && this.recruitableHeroes.length <= 2 && MathHelpers.chance(50)) {
      heroLevel = HeroService.getHeroLevelForReputation(this.playerReputation);
    } else if (this.hiredHeroes.length === 0 && this.recruitableHeroes.length === 0) {
      heroLevel = HeroService.getHeroLevelForReputation(this.playerReputation * 0.8);
    }

    if (heroLevel > 0) {
      const hero = this.createHero(heroLevel);
      this.addRecruitableHero(hero);
      this.createReport('New recruit', `${hero.name} is available for hire`, ReportType.recruitment);
    }

    // Game over?
    if (this.hiredHeroes.length === 0 &&
      this.gold < Math.min.apply(null, this.recruitableHeroes.map(h => h.hiringFee))) {
      this.createReport('Game over', 'You can no longer afford new heroes', ReportType.event);
    }
  }

  handleTick() {
    const abort = this.preTickEvents();
    if (abort) {
      return;
    }

    const prevGold = this.gold;

    const homeCosts = Math.floor(
      this.hiredHeroes
        .filter(h => !h.assignment)
        .reduce((accumulator, hero) => accumulator + hero.missionFee / 2, 0)
    );

    if (homeCosts > 0) {
      this.createReport(`Upkeep`, `Home team cost ${homeCosts}`, ReportType.event);
      this.subtractGold(homeCosts);
    }

    this.missionsWithAssignments.forEach(this.handleMission.bind(this));
    this.createReport(`Tick ${this.tick} summary`, `Gold: ${this.gold} (was ${prevGold})`, ReportType.event);
    this.store.dispatch(GameActions.tick());

    this.postTickEvents();
  }

  newGame() {
    DataService.clearData();
    this.store.dispatch(DataActions.resetState());
    this.init = false;
    this.gameInit();
  }

  gameInit() {
    if (this.init) {
      return;
    }

    if (DataService.hasData()) {
      this.store.dispatch(DataActions.loadState());
      this.init = true;
      return;
    }

    this.createReport('Welcome', 'Today you found a castle, you now own a castle', ReportType.event);

    uniqueMissions.forEach(m => {
      this.addActiveMission({ ...m, id: this.nextMissionId });
    });

    for (let i = 0; i < 4; i++) {
      this.addRecruitableHero(this.createHero(HeroService.getHeroLevelForReputation(this.playerReputation)));
    }

    this.init = true;
  }
}
