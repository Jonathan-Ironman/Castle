import { Action } from '@ngrx/store';
import { Hero } from 'src/app/models/hero';

export const ADD_GOLD = 'ACTION_ADD_GOLD';
export const ADD_HERO = 'ACTION_ADD_HERO';
export const ADD_RECRUITABLE_HERO = 'ADD_RECRUITABLE_HERO';
export const ADVENTURE = 'ACTION_ADVENTURE';

// tslint:disable-next-line:class-name
export class ACTION_ADD_GOLD implements Action {
  readonly type = ADD_GOLD;
  payload: number;

  constructor(payload: number) {
    this.payload = payload;
  }
}

class HeroAction {
  payload: Hero;

  constructor(payload: Hero) {
    this.payload = payload;
  }
}

// tslint:disable-next-line:class-name
export class ACTION_ADD_HERO extends HeroAction implements Action {
  readonly type = ADD_HERO;
}

// tslint:disable-next-line:class-name
export class ACTION_ADD_RECRUITABLE_HERO extends HeroAction implements Action {
  readonly type = ADD_RECRUITABLE_HERO;
}

// tslint:disable-next-line:class-name
export class ACTION_ADVENTURE implements Action {
  readonly type = ADVENTURE;
}
