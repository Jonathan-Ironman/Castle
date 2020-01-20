import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from 'src/app/material/material.module';
import { reducers } from 'src/app/store/reducers';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { HeroAssignmentComponent } from './hero-assignment.component';
import { RouterModule } from '@angular/router';

describe('HeroAssignmentComponent', () => {
  let component: HeroAssignmentComponent;
  let fixture: ComponentFixture<HeroAssignmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot(reducers),
        RouterModule.forRoot([]),
      ],
      declarations: [
        HeroAssignmentComponent,
        ActionButtonComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
