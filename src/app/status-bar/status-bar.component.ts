import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
constructor(private service: GameService) { }
  gold: number;

  updateGold() {
    this.gold = this.service.getGoldCount();
  }

  ngOnInit() {
    this.gold = this.service.getGoldCount();
    window.setInterval(this.updateGold.bind(this), 1000);
  }
}
