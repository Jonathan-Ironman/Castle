import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { reducers } from 'src/app/store/reducers';
import { MaterialModule } from '../../material/material.module';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { HeroMenuComponent } from './hero-menu.component';
import { appRoutes } from 'src/app/routes';

describe('HeroMenuComponent', () => {
  let component: HeroMenuComponent;
  let fixture: ComponentFixture<HeroMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers),
        MaterialModule,
        FormsModule,
        RouterTestingModule.withRoutes(
          appRoutes.filter(r => r.component === HeroMenuComponent)
        )
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
