import { TestBed } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';

describe('HeroService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot(reducers)]
  }));

  it('should be created', () => {
    const service: HeroService = TestBed.get(HeroService);
    expect(service).toBeTruthy();
  });
});
