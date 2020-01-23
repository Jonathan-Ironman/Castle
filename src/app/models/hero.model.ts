import { Gender } from '../misc/gender.enum';
import { Mission } from './mission.model';

export class Hero {
  readonly id: number;
  readonly name: string;
  readonly level: number;
  readonly gender: Gender;
  readonly combat: number;
  readonly tactics: number;
  readonly valor: number;
  readonly hiringFee: number;
  readonly missionFee: number;
  readonly assignment?: Mission['id'];

  constructor(hero: Hero) {
    Object.assign(this, hero);
  }
}
