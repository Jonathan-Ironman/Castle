import { Component, OnInit } from '@angular/core';
import { Report } from 'src/app/models/report.model';
import { GameService } from 'src/app/services/game.service';
import { ReportSelectors } from '../../store/selectors/report.selector';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/reducers';

@Component({
    selector: 'app-mission-control',
    templateUrl: './mission-control.component.html',
    styleUrls: ['./mission-control.component.scss'],
    standalone: false
})
export class MissionControlComponent implements OnInit {
  reports: readonly Report[];
  handleTick: () => void;

  constructor(private store: Store<AppState>, private gameService: GameService) { }

  ngOnInit() {
    this.store.select(ReportSelectors.reports).subscribe(
      reports => this.reports = reports
    );

    this.handleTick = this.gameService.handleTick.bind(this.gameService);
  }
}
