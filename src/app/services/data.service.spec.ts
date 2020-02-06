import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { storeConfig } from '../app.module';
import { reducers } from '../store/reducers';
import { AppState } from '../store/reducers';
import { DataService, localStorageKey } from './data.service';

describe('DataService', () => {
  let service: DataService;
  const localStorageSpy: any = {};

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, storeConfig)
      ],
    });
    service = TestBed.get(DataService);

    localStorageSpy.setItem = spyOn(window.localStorage, 'setItem');
    localStorageSpy.getItem = spyOn(window.localStorage, 'getItem');
    localStorageSpy.removeItem = spyOn(window.localStorage, 'removeItem');
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should store data', () => {
    const fakeState = { test: true } as unknown as AppState;
    service.saveGameState(fakeState);
    expect(localStorageSpy.setItem).toHaveBeenCalledWith(localStorageKey, JSON.stringify(fakeState));
  });

  it('should retrieve data', () => {
    service.loadData();
    expect(localStorageSpy.getItem).toHaveBeenCalledWith(localStorageKey);
    // TODO actual load
  });

  it('should check for data', () => {
    service.hasData();
    expect(localStorageSpy.getItem).toHaveBeenCalledWith(localStorageKey);
  });

  it('should clear data', () => {
    service.clearData();
    expect(localStorageSpy.removeItem).toHaveBeenCalledWith(localStorageKey);
  });
});
