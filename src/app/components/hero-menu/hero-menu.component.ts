import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { Hero } from 'src/app/models/hero';

@Component({
  selector: 'app-hero-menu',
  templateUrl: './hero-menu.component.html',
  styleUrls: ['./hero-menu.component.scss']
})
export class HeroMenuComponent implements OnInit {
  heroes: Hero[];
  constructor(private gameService: GameService) {}

  ngOnInit() {
    this.gameService.heroes$.subscribe(heroes => {
      this.heroes = heroes;
    });
  }
}
