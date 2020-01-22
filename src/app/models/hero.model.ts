import { Gender } from '../misc/gender.enum';
import { Mission } from './mission.model';

// TODO: Make everything readonly.
export class Hero {
  readonly id: number;
  readonly name: string;
  level: number;
  gender: Gender;
  combat: number;
  tactics: number;
  valor: number;
  hiringFee: number;
  missionFee: number;
  assignment?: Mission['id'];

  constructor(hero: Hero) {
    Object.assign(this, hero);
  }
}
