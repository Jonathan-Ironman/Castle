import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';
import { DatabaseService } from '../../services/database.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  constructor(
    private gameService: GameService,
    private dbService: DatabaseService
  ) {}
  gold: number;

  addCoffee = () => {
    window.alert('Add to DB');
    this.dbService.addUser();
  };

  ngOnInit() {
    this.gameService.gold$.subscribe(gold => {
      this.gold = gold;
    });
  }
}
