import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';
import { GameService } from 'src/app/services/game.service';
import { HeroActions } from '../../store/actions/hero.actions';
import { AppState } from '../../store/reducers';
import { ResourceActions } from '../../store/actions/resource.actions';

@Component({
  selector: 'app-hero-recruit',
  templateUrl: './hero-recruit.component.html',
  styleUrls: ['./hero-recruit.component.scss']
})
export class HeroRecruitComponent implements OnInit {
  heroes: Hero[];
  gold: number;

  canHireHero(hiringPrice) {
    return hiringPrice <= this.gold;
  }

  recruit(hero: Hero) {
    if (!this.canHireHero(hero.hiringFee)) {
      return;
    }

    this.store.dispatch(HeroActions.hireHero(hero));
    this.store.dispatch(HeroActions.removeRecruitableHero(hero));
    this.store.dispatch(ResourceActions.substractGold(hero.hiringFee));
  }

  constructor(private gameService: GameService, private store: Store<AppState>) { }

  ngOnInit() {
    this.gameService.recruitableHeroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
    this.gameService.gold$.subscribe(gold => {
      this.gold = gold;
    });
  }
}
