import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { GameService } from 'src/app/services/game.service';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';

@Component({
  selector: 'app-hero-recruit',
  templateUrl: './hero-recruit.component.html',
  styleUrls: ['./hero-recruit.component.scss']
})
export class HeroRecruitComponent implements OnInit {
  heroes: Hero[];

  recruit(hero: Hero) {
    // this.store.dispatch(new ACTION_RECRUIT_HERO(hero));
  }

  constructor(private gameService: GameService, private store: Store<AppState[]>) { }

  ngOnInit() {
    this.gameService.recruitableHeroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
