import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.store';
import { Hero } from '../models/hero';
import { Gender } from '../misc/gender.enum';
import { maleHeroNames, femaleHeroNames } from '../misc/hero-names';
import { MathHelpers } from '../misc/math-helpers';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private maleToFemalePercentage = 70;
  // TODO: remember to store.
  private idCount = 1;

  private generateHeroGender(): Gender {
    const gender = MathHelpers.chance(this.maleToFemalePercentage) && Gender.male || Gender.female;
    return gender;
  }

  private generateHeroName(gender: Gender): string {
    const list = gender === Gender.male && maleHeroNames ||
      gender === Gender.female && femaleHeroNames;
    const name = list[MathHelpers.getRandomInt(0, list.length - 1)];
    return name;
  }

  createHero(level: number): Hero {
    const gender = this.generateHeroGender();
    const hero = new Hero({
      id: this.idCount++,
      name: this.generateHeroName(gender),
      gender,
      level,
      combat: MathHelpers.getRandomInt(level * 3, level * 5),
      tactics: MathHelpers.getRandomInt(level * 3, level * 5),
      valor: MathHelpers.getRandomInt(level * 3, level * 5),
      missionFee: 10,
      hiringFee: 100,
      action: 'rest'
    });
    return hero;
  }

  constructor(private store: Store<AppState[]>) { }
}
