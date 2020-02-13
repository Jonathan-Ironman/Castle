import { Component, OnInit } from '@angular/core';
import * as Hammer from 'hammerjs';
import { GameService } from './services/game.service';
import { RouterService } from './services/router.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private routerService: RouterService
  ) {}

  ngOnInit() {
    this.gameService.gameInit();

    const hammer = new Hammer(document.documentElement);
    hammer.on('swipeleft swiperight', event => {
      if (event.type === 'swiperight') {
        this.routerService.navPrev();
      } else if (event.type === 'swipeleft') {
        this.routerService.navNext();
      }
    });
  }
}
