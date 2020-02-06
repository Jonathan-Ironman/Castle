import { TestBed } from '@angular/core/testing';
import { AngularFirestore } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../store/reducers';
import { DatabaseService } from './database.service';
import { storeConfig } from '../app.module';

describe('DatabaseService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      StoreModule.forRoot(reducers, storeConfig)
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
