import { TestBed } from '@angular/core/testing';

import { GameService } from './game.service';
import { StoreModule } from '@ngrx/store';
import { resourceReducer } from '../store/reducers/reducers';

describe('GameService', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [StoreModule.forRoot(resourceReducer)]
    })
  );

  it('should be created', () => {
    const service: GameService = TestBed.get(GameService);
    expect(service).toBeTruthy();
  });
});
