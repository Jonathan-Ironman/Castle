import { Action } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';

export const ADD_GOLD = 'ACTION_ADD_GOLD';
export const ADD_HERO = 'ACTION_ADD_HERO';

// tslint:disable-next-line:class-name
export class ACTION_ADD_GOLD implements Action {
  readonly type = ADD_GOLD;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

// tslint:disable-next-line:class-name
export class ACTION_ADD_HERO implements Action {
  readonly type = ADD_HERO;
  payload: Hero;

  constructor(payload: Hero) {
    this.payload = payload;
  }
}
