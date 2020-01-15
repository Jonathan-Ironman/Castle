import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';
import { GameService } from 'src/app/services/game.service';
import { HeroActions } from '../../store/actions/hero.actions';
import { AppState } from '../../store/reducers';

@Component({
  selector: 'app-hero-recruit',
  templateUrl: './hero-recruit.component.html',
  styleUrls: ['./hero-recruit.component.scss']
})
export class HeroRecruitComponent implements OnInit {
  heroes: Hero[];

  recruit(hero: Hero) {
    this.store.dispatch(HeroActions.hireHero(hero));
    this.store.dispatch(HeroActions.removeRecruitableHero(hero));
  }

  constructor(private gameService: GameService, private store: Store<AppState>) { }

  ngOnInit() {
    this.gameService.recruitableHeroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
