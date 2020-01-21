import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'app-mission-control',
  templateUrl: './mission-control.component.html',
  styleUrls: ['./mission-control.component.scss']
})
export class MissionControlComponent implements OnInit {
  reports: readonly Report[];
  handleTick: () => void;

  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.reports$.subscribe(reports => {
      this.reports = reports;
    });

    this.handleTick = this.gameService.handleTick.bind(this.gameService);
  }
}
