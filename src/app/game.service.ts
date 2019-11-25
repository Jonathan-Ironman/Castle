import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  gold = 0;

  getGoldCount(): number {
    return this.gold;
  }

  tick() {
    this.gold++;
  }

  constructor() {
    window.setInterval(this.tick.bind(this), 1000);
   }
}
