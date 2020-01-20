import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero.model';
import { HeroActions } from 'src/app/store/actions/hero.actions';
import { ResourceActions } from 'src/app/store/actions/resource.actions';
import { GameService } from 'src/app/services/game.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';
import { Observable, of } from 'rxjs';
import { Mission } from '../../models/mission.model';
import { uniqueMissions } from '../../misc/missions';

@Component({
  selector: 'app-hero-assignment',
  templateUrl: './hero-assignment.component.html',
  styleUrls: ['./hero-assignment.component.scss']
})
export class HeroAssignmentComponent implements OnInit {
  heroes: Hero[];
  mission$: Observable<Mission | undefined>;
  mission: Mission | undefined;

  assignHeroToMission(hero: Hero) {
    if (!this.mission) {
      return console.error('Mission undefined');
    }
    this.store.dispatch(HeroActions.assignMissionToHero({ hero, mission: this.mission }));
  }

  constructor(
    private gameService: GameService,
    private store: Store<AppState>,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit() {
    this.gameService.heroes$.subscribe(heroes => {
      this.heroes = heroes;
    });

    this.mission$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) => {
        const missionId = params.get('missionId');
        return of(uniqueMissions.find(m => m.id === missionId));
      }));

    this.mission$.subscribe(m => this.mission = m);
  }
}
