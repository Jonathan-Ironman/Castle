import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Mission } from 'src/app/models/mission.model';
import { AppState } from '../../store/reducers';
import { MissionSelectors } from '../../store/selectors/mission.selector';
import { HeroSelectors } from 'src/app/store/selectors/hero.selector';
import { Hero } from 'src/app/models/hero.model';
import { Observable } from 'rxjs';
import { switchMap, map } from 'rxjs/operators';

@Component({
    selector: 'app-mission-section',
    templateUrl: './mission-section.component.html',
    styleUrls: ['./mission-section.component.scss'],
    standalone: false
})
export class MissionSectionComponent implements OnInit {
  missions$: Observable<readonly Mission[]>;
  heroes$: Observable<readonly Hero[]>;
  heroes: readonly Hero[];
  missionsPlusAssignments: any[];

  canAssignHero(mission: Mission): boolean {
    return !!this.heroes.length;
  }

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.missions$ = this.store.select(MissionSelectors.activeMissions);
    this.heroes$ = this.store.select(HeroSelectors.hiredHeroes);
    this.heroes$.subscribe(heroes => (this.heroes = heroes));

    this.missions$
      .pipe(
        switchMap((missions: Mission[]) =>
          this.heroes$.pipe(
            map((heroes: Hero[]) => {
              const result = [];
              missions.forEach(m => {
                const heroNamesForMission = heroes
                  .filter(h => h.assignment === m.id)
                  .map(h => h.name);
                result.push({ ...m, assignedHeroes: heroNamesForMission });
              });
              return result;
            })
          )
        )
      )
      .subscribe(
        missionsPlusAssignments =>
          (this.missionsPlusAssignments = missionsPlusAssignments)
      );
  }
}
