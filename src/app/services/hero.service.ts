import { Injectable } from '@angular/core';
import { Gender } from '../misc/gender.enum';
import { femaleHeroNames, maleHeroNames } from '../misc/hero-names';
import { MathHelpers } from '../misc/math-helpers';
import { Hero } from '../models/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private static maleToFemalePercentage = 85;

  static generateHeroGender(): Gender {
    if (MathHelpers.chance(this.maleToFemalePercentage)) {
      return Gender.male;
    }

    return Gender.female;
  }

  private static generateHeroName(gender: Gender): string {
    const list = gender === Gender.male && maleHeroNames ||
      gender === Gender.female && femaleHeroNames;
    const name = list[MathHelpers.getRandomInt(0, list.length - 1)];
    return name;
  }

  static getHeroLevelForReputation(playerReputation: number) {
    let min = playerReputation / 10;
    let max = playerReputation / 4;
    if (MathHelpers.chance(10)) {
      min = playerReputation / 5;
      max = playerReputation / 3;
    } else if (MathHelpers.chance(10)) {
      min = playerReputation / 20;
      max = playerReputation / 10;
    }

    return Math.max(Math.floor(MathHelpers.getRandomInt(min, max)), 1);
  }

  static generateHero(id: number, level: number): Hero {
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
}
