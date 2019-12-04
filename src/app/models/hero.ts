export class Hero {
  readonly id: number;
  readonly name: string;
  level: number;
  combat: number;
  tactics: number;
  valor: number;

  constructor(hero: Hero) {
    Object.assign(this, hero);
  }
}
