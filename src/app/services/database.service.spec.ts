import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { DatabaseService } from './database.service';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(reducers)
    ],
    providers: [
      { provide: AngularFirestore, useValue: {} }
    ]
  }));

  it('should be created', () => {
    const service: DatabaseService = TestBed.get(DatabaseService);
    expect(service).toBeTruthy();
  });
});
