import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { DatabaseService } from '../../services/database.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private authService: AuthService,
    private dbService: DatabaseService
  ) {}
  gold: number;

  addCoffee = () => {
    window.alert('Add to DB');
    this.dbService.addUser();
  };

  auth = () => {
    window.alert('Auth');
    this.authService.authenticate();
  };

  ngOnInit() {
    this.gameService.gold$.subscribe(gold => {
      this.gold = gold;
    });
  }
}
