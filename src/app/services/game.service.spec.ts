import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers/index';

describe('GameService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(reducers)]
    })
  );

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
