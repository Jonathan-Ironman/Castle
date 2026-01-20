import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.scss'],
    standalone: false
})
export class MenuComponent implements OnInit {
  constructor(private gameService: GameService) { }

  newGame = () => {
    this.gameService.newGame();
  }

  addUser = () => {
    // this.dbService.addUser();
  }

  login = () => {
    // this.authService.authenticate();
  }

  ngOnInit() { }
}
