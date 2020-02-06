import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusBarComponent } from './status-bar.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers/index';
import { MenuComponent } from '../menu/menu.component';
import { MaterialModule } from '../../material/material.module';
import { storeConfig } from 'src/app/app.module';

describe('StatusBarComponent', () => {
  let component: StatusBarComponent;
  let fixture: ComponentFixture<StatusBarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        StatusBarComponent,
        MenuComponent
      ],
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers, storeConfig)
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
