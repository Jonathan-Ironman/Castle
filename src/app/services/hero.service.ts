import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Gender } from '../misc/gender.enum';
import { femaleHeroNames, maleHeroNames } from '../misc/hero-names';
import { MathHelpers } from '../misc/math-helpers';
import { Hero } from '../models/hero.model';
import { AppState } from '../store/reducers';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private maleToFemalePercentage = 85;
  // TODO: remember to store.
  private idCount = 1;

  generateHeroGender(): Gender {
    if (MathHelpers.chance(this.maleToFemalePercentage)) {
      return Gender.male;
    }

    return Gender.female;
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
      hiringFee: MathHelpers.chance(50) && 100 || 2000,
    });
    return hero;
  }

  constructor(private store: Store<AppState>) { }
}
