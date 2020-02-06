import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers/index';
import { storeConfig } from '../app.module';

describe('GameService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, storeConfig)
      ]
    })
  );

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
