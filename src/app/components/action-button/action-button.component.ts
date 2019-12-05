import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.store';
import { ACTION_ADVENTURE } from '../../store/actions/actions';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  adventureTime() {
    this.gameService.adventure();
  }

  constructor(private gameService: GameService) {}
  ngOnInit() {}
}
