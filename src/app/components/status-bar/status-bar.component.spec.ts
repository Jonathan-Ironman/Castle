import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarComponent } from './status-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers/index';
import { MenuComponent } from '../menu/menu.component';

describe('StatusBarComponent', () => {
  let component: StatusBarComponent;
  let fixture: ComponentFixture<StatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [StatusBarComponent],
      imports: [
        MenuComponent,
        StoreModule.forRoot(reducers)
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
