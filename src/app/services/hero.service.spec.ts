import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { Gender } from '../misc/gender.enum';
import { femaleHeroNames, maleHeroNames } from '../misc/hero-names';
import { MathHelpers } from '../misc/math-helpers';
import { reducers } from '../store/reducers';
import { HeroService } from './hero.service';

describe('HeroService', () => {
  let service: HeroService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)]
    });
    service = TestBed.get(HeroService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('be able to create heroes with all properties defined', () => {
    spyOn(MathHelpers, 'chance').and.returnValue(true);
    spyOn(MathHelpers, 'getRandomInt').and.returnValue(1);
    const hero = service.createHero(1);
    expect(Object.values(hero)).not.toContain(null);
    expect(Object.values(hero)).not.toContain(undefined);
  });

  it('be able to create male heroes', () => {
    spyOn(MathHelpers, 'chance').and.returnValue(true);
    const hero = service.createHero(1);
    expect(hero.gender).toBe(Gender.male);
  });

  it('be able to create male heroes with a male name', () => {
    spyOn(MathHelpers, 'chance').and.returnValue(true);
    spyOn(MathHelpers, 'getRandomInt').and.returnValue(0);
    const hero = service.createHero(1);
    expect(maleHeroNames).toContain(hero.name);
  });

  it('be able to create female heroes', () => {
    spyOn(MathHelpers, 'chance').and.returnValue(false);
    const hero = service.createHero(1);
    expect(hero.gender).toBe(Gender.female);
  });

  it('be able to create female heroes with a female name', () => {
    spyOn(MathHelpers, 'chance').and.returnValue(false);
    spyOn(MathHelpers, 'getRandomInt').and.returnValue(0);
    const hero = service.createHero(1);
    expect(femaleHeroNames).toContain(hero.name);
  });
});
