import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../material/material.module';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { MissionSectionComponent } from './mission-section.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../../store/reducers/index';
import { storeConfig } from 'src/app/app.module';

describe('MissionSectionComponent', () => {
  let component: MissionSectionComponent;
  let fixture: ComponentFixture<MissionSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MaterialModule,
        RouterModule.forRoot([]),
        StoreModule.forRoot(reducers, storeConfig),
      ],
      declarations: [
        MissionSectionComponent,
        ActionButtonComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
