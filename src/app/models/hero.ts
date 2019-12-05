export class Hero {
  readonly id: number;
  readonly name: string;
  level: number;
  combat: number;
  tactics: number;
  valor: number;
  action: 'adventure' | 'train' | 'rest';

  constructor(hero: Hero) {
    Object.assign(this, hero);
  }
}
