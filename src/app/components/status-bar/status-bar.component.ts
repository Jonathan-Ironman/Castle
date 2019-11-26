import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  constructor(private service: GameService) {}
  gold: number;

  ngOnInit() {
    this.service.gold$.subscribe(gold => {
      this.gold = gold;
    });
  }
}
