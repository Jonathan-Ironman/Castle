import { TestBed } from '@angular/core/testing';
import { Store, StoreModule } from '@ngrx/store';
import { storeConfig } from '../app.module';
import { uniqueMissions } from '../misc/missions';
import { ReportType } from '../misc/report-type.enum';
import { Report } from '../models/report.model';
import { HeroActions } from '../store/actions/hero.actions';
import { MissionActions } from '../store/actions/mission.actions';
import { ReportActions } from '../store/actions/report.actions';
import { ResourceActions } from '../store/actions/resource.actions';
import { AppState, reducers } from '../store/reducers';
import { fakeHero } from '../testing/fakeHero';
import { GameService } from './game.service';
import { GameActions } from '../store/actions/game.actions';

describe('GameService', () => {
  let service: GameService;
  let store: Store<AppState>;
  let dispatchSpy: jasmine.Spy;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, storeConfig)
      ]
    });
    service = TestBed.inject(GameService);
    store = TestBed.inject(Store);
    dispatchSpy = spyOn(store, 'dispatch');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add gold', () => {
    const action = ResourceActions.addGold(10);

    service.addGold(10);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.argsFor(0)[0])
      .toEqual(jasmine.objectContaining(action));
  });

  it('should hire heroes', () => {
    const hireHeroAction = HeroActions.hireHero({ hero: fakeHero });
    const removeHeroAction = HeroActions.removeRecruitableHero({ hero: fakeHero });
    const incrementReportIdAction = GameActions.incrementReportId();
    const goldAction = ResourceActions.subtractGold(fakeHero.hiringFee);

    service.hireHero(fakeHero);

    expect(dispatchSpy).toHaveBeenCalledTimes(5);
    expect(dispatchSpy).toHaveBeenCalledWith(hireHeroAction);
    expect(dispatchSpy).toHaveBeenCalledWith(removeHeroAction);
    expect(dispatchSpy).toHaveBeenCalledWith(goldAction);
    expect(dispatchSpy).toHaveBeenCalledWith(incrementReportIdAction);
  });

  it('should add recruitable heroes', () => {
    const action = HeroActions.addRecruitableHero({ hero: fakeHero });

    service.addRecruitableHero(fakeHero);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.argsFor(0)[0])
      .toEqual(jasmine.objectContaining(action));
  });

  it('should add active missions', () => {
    const mission = uniqueMissions[0];
    const action = MissionActions.addActiveMission({ mission });

    service.addActiveMission(mission);

    expect(dispatchSpy).toHaveBeenCalledTimes(1);
    expect(dispatchSpy.calls.argsFor(0)[0])
      .toEqual(jasmine.objectContaining(action));
  });

  it('should create reports', () => {
    const title = 'title';
    const text = 'text';
    const report = new Report({
      id: 0,
      title,
      text,
      tick: 1,
      reportType: ReportType.mission
    });
    const incrementReportIdAction = GameActions.incrementReportId();
    const addReportAction = ReportActions.addReport({ report });

    service.createReport(title, text, ReportType.mission);

    expect(dispatchSpy).toHaveBeenCalledTimes(2);
    expect(dispatchSpy.calls.argsFor(0)[0])
      .toEqual(jasmine.objectContaining(incrementReportIdAction));
    expect(dispatchSpy.calls.argsFor(1)[0])
      .toEqual(jasmine.objectContaining(addReportAction));
  });

  it('should handle mission gold rewards', () => {
    const mission = uniqueMissions[0];
    const goldSpy = spyOn(service, 'addGold');

    const result = service.handleMissionRewards(mission);

    expect(result.length).toBeGreaterThan(1);
    expect(goldSpy).toHaveBeenCalledTimes(1);
    expect(goldSpy.calls.argsFor(0)[0]).toEqual(100);
  });

  // it('should handle missions', () => {
  //   expect(false).toBeTruthy();
  // });

  it('should handle game ticks', () => {
    // TODO complete
    // const handleMissionSpy = spyOn(service, 'handleMission');
    const createReportSpy = spyOn(service, 'createReport');
    const preTickSpy = spyOn(service, 'preTickEvents').and.returnValue(false);
    const postTickSpy = spyOn(service, 'postTickEvents');

    // service.missionsWithAssignments

    service.handleTick();

    // expect(handleMissionSpy).toHaveBeenCalledTimes(1);
    expect(createReportSpy).toHaveBeenCalledTimes(2);
    expect(preTickSpy).toHaveBeenCalledTimes(1);
    expect(postTickSpy).toHaveBeenCalledTimes(1);
  });

  // it('should handle game init', () => {
  //   expect(false).toBeTruthy();
  // });
});
