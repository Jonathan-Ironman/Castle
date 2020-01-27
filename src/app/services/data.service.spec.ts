import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { DataService } from './data.service';

describe('DataService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(reducers)
    ],
  }));

  it('should be created', () => {
    const service: DataService = TestBed.get(DataService);
    expect(service).toBeTruthy();
  });
});
