import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Hero } from 'src/app/models/hero.model';
import { Mission } from 'src/app/models/mission.model';
import { HeroActions } from 'src/app/store/actions/hero.actions';
import { HeroSelectors } from 'src/app/store/selectors/hero.selector';
import { MissionSelectors } from 'src/app/store/selectors/mission.selector';
import { GameService } from '../../services/game.service';
import { AppState, selectResourceState } from '../../store/reducers';
import { Store } from '@ngrx/store';

export enum HeroScreenType {
  main = 'main',
  recruit = 'recruit',
  assign = 'assign'
}

@Component({
    selector: 'app-hero-menu',
    templateUrl: './hero-menu.component.html',
    styleUrls: ['./hero-menu.component.scss'],
    standalone: false
})
export class HeroMenuComponent implements OnInit {
  heroes: readonly Hero[] = [];
  gold: Readonly<number>;
  mission$: Observable<Mission | undefined>;
  mission: Mission | undefined;
  screenType: HeroScreenType;

  hiredHeroes$: Observable<readonly Hero[]>;
  recruitableHeroes$: Observable<readonly Hero[]>;
  routeData$: Observable<Data>;

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private gameService: GameService
  ) {}

  assignHeroToMission(hero: Hero) {
    if (!this.mission) {
      return console.error('Mission undefined');
    }
    this.store.dispatch(
      HeroActions.assignMissionToHero({ hero, missionId: this.mission.id })
    );
  }

  unassignHeroFromMission(hero: Hero) {
    this.store.dispatch(HeroActions.unassignMissionFromHero({ hero }));
  }

  canHireHero(hiringPrice: number) {
    return hiringPrice <= this.gold;
  }

  recruit(hero: Hero) {
    if (!this.canHireHero(hero.hiringFee)) {
      return;
    }

    this.gameService.hireHero(hero);
  }

  ngOnInit() {
    this.routeData$ = this.route.data;
    this.hiredHeroes$ = this.store.select(HeroSelectors.hiredHeroes);
    this.recruitableHeroes$ = this.store.select(
      HeroSelectors.recruitableHeroes
    );

    this.routeData$
      .pipe(
        switchMap(routeData => {
          return this.hiredHeroes$.pipe(
            switchMap(hiredHeroes => {
              return this.recruitableHeroes$.pipe(
                map(recruitableHeroes => {
                  return {
                    hiredHeroes,
                    recruitableHeroes,
                    routeData
                  };
                })
              );
            })
          );
        })
      )
      .subscribe(data => {
        this.screenType = data.routeData.screenType;
        this.heroes =
          (this.screenType === HeroScreenType.recruit &&
            data.recruitableHeroes) ||
          data.hiredHeroes;
      });

    this.store
      .select(selectResourceState)
      .subscribe(resources => (this.gold = resources.gold));

    this.mission$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const missionId = +params.get('missionId');
        return this.store.select(MissionSelectors.missionById(missionId));
      })
    );

    this.mission$.subscribe(m => (this.mission = m));
  }
}
