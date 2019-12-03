import { Component, OnInit } from '@angular/core';
import { GameService } from '../../services/game.service';

@Component({
  selector: 'app-status-bar',
  templateUrl: './status-bar.component.html',
  styleUrls: ['./status-bar.component.scss']
})
export class StatusBarComponent implements OnInit {
  constructor(private gameService: GameService) {}
  gold: number;

  // subscribeUserList = () =>
  //   this.dbService.getUsers().subscribe(res => {
  //     const userdata = res.map(i => i.payload.doc.data());
  //     this.users = userdata;
  //   });

  ngOnInit() {
    this.gameService.gold$.subscribe(gold => {
      this.gold = gold;
    });
  }
}
