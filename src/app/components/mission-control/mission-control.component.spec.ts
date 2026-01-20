import { waitForAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionControlComponent } from './mission-control.component';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { MaterialModule } from 'src/app/material/material.module';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers/index';
import { storeConfig } from 'src/app/app.module';

describe('MissionControlComponent', () => {
  let component: MissionControlComponent;
  let fixture: ComponentFixture<MissionControlComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers, storeConfig),
      ],
      declarations: [
        MissionControlComponent,
        ActionButtonComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
