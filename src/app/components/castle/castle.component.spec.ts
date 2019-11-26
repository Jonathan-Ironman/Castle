import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CastleComponent } from './castle.component';
import { StoreModule } from '@ngrx/store';
import { resourceReducer } from 'src/app/store/reducers/reducers';

describe('CastleComponent', () => {
  let component: CastleComponent;
  let fixture: ComponentFixture<CastleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CastleComponent],
      imports: [StoreModule.forRoot(resourceReducer)]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CastleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
