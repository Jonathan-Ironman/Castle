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
    const id = this.idCount++;
    const gender = this.generateHeroGender();
    const name = this.generateHeroName(gender);
    const combat = MathHelpers.getRandomInt(level * 1, level * 25);
    const tactics = MathHelpers.getRandomInt(level * 1, level * 25);
    const valor = MathHelpers.getRandomInt(level * 1, level * 25);

    const combinedSkills = combat + tactics + valor;

    const hiringFee = MathHelpers.getRandomInt(combinedSkills * 1.1, combinedSkills * 1.6);
    const missionFee = MathHelpers.getRandomInt(combinedSkills * 0.3, combinedSkills * 0.4);

    return new Hero({
      id, name, gender, level, combat, tactics, valor, missionFee, hiringFee,
    });
  }

  constructor(private store: Store<AppState>) { }
}
