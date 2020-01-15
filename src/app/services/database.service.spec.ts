import { TestBed } from '@angular/core/testing';

import { DatabaseService } from './database.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { AngularFirestore } from '@angular/fire/firestore';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [StoreModule.forRoot(reducers)],
    providers: [AngularFirestore]
  }));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });
});
