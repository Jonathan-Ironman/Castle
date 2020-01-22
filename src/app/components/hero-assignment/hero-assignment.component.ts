import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Hero } from 'src/app/models/hero.model';
import { HeroActions } from 'src/app/store/actions/hero.actions';
import { AppState } from 'src/app/store/reducers';
import { HeroSelectors } from 'src/app/store/selectors/hero.selector';
import { Mission } from '../../models/mission.model';
import { MissionSelectors } from '../../store/selectors/mission.selector';

@Component({
  selector: 'app-hero-assignment',
  templateUrl: './hero-assignment.component.html',
  styleUrls: ['./hero-assignment.component.scss']
})
export class HeroAssignmentComponent implements OnInit {
  heroes: readonly Hero[];
  mission$: Observable<Mission | undefined>;
  mission: Mission | undefined;

  assignHeroToMission(hero: Hero) {
    if (!this.mission) {
      return console.error('Mission undefined');
    }
    this.store.dispatch(HeroActions.assignMissionToHero({ hero, mission: this.mission }));
  }

  unassignHeroFromMission(hero: Hero) {
    this.store.dispatch(HeroActions.unassignMissionFromHero({ hero }));
  }

  constructor(
    private store: Store<AppState>,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.store.select(HeroSelectors.hiredHeroes).subscribe(
      heroes => this.heroes = heroes
    );

    this.mission$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const missionId = params.get('missionId');
        return this.store.select(MissionSelectors.missionById(missionId));
      }));

    this.mission$.subscribe(m => this.mission = m);
  }
}
