import { Component, OnInit } from '@angular/core';
import { Hero } from 'src/app/models/hero';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-hero-recruit',
  templateUrl: './hero-recruit.component.html',
  styleUrls: ['./hero-recruit.component.scss']
})
export class HeroRecruitComponent implements OnInit {
  heroes: Hero[];
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.recruitableHeroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
