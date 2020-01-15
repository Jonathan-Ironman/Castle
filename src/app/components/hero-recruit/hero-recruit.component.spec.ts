import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';

import { HeroRecruitComponent } from './hero-recruit.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { ActionButtonComponent } from '../action-button/action-button.component';

describe('HeroRecruitComponent', () => {
  let component: HeroRecruitComponent;
  let fixture: ComponentFixture<HeroRecruitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        StoreModule.forRoot(reducers),
        ActionButtonComponent,
      ],
      declarations: [HeroRecruitComponent]
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
