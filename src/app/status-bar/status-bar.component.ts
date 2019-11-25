import { Component, OnInit } from '@angular/core';
import { GameService } from '../game.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  constructor(private service: GameService) {}
  gold: number;

  ngOnInit() {
    this.service.getGoldCount().subscribe(state => {
      // TODO: y u no work
      this.gold = state && state.gold;
    });
  }
}
