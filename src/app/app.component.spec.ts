import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { StoreModule } from '@ngrx/store';
import { resourceReducer } from './store/reducers/reducers';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent, StatusBarComponent],
      imports: [StoreModule.forRoot(resourceReducer)]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Castle'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Castle');
  });
});
