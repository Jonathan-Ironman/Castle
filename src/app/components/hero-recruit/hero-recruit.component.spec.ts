import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { HeroRecruitComponent } from './hero-recruit.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { MaterialModule } from '../../material/material.module';

describe('HeroRecruitComponent', () => {
  let component: HeroRecruitComponent;
  let fixture: ComponentFixture<HeroRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        MaterialModule
      ],
      declarations: [
        HeroRecruitComponent,
        ActionButtonComponent
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroRecruitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
