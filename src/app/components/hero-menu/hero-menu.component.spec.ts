import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HeroMenuComponent } from './hero-menu.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { MaterialModule } from '../../material/material.module';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { FormsModule } from '@angular/forms';

describe('HeroMenuComponent', () => {
  let component: HeroMenuComponent;
  let fixture: ComponentFixture<HeroMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        MaterialModule,
        FormsModule
      ],
      declarations: [
        HeroMenuComponent,
        ActionButtonComponent
      ]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
