import { Gender } from '../misc/gender.enum';
import { Mission } from './mission.model';

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
  action: 'adventure' | 'train' | 'rest';
  assignment?: Mission;

  constructor(hero: Hero) {
    Object.assign(this, hero);
  }
}
