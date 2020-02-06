import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { storeConfig } from 'src/app/app.module';
import { uniqueMissions } from 'src/app/misc/missions';
import { appRoutes } from 'src/app/routes';
import { HeroActions } from 'src/app/store/actions/hero.actions';
import { ResourceActions } from 'src/app/store/actions/resource.actions';
import { reducers } from 'src/app/store/reducers';
import { MaterialModule } from '../../material/material.module';
import { AppState } from '../../store/reducers';
import { fakeHero } from '../../testing/fakeHero';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { HeroMenuComponent } from './hero-menu.component';

describe('HeroMenuComponent', () => {
  let component: HeroMenuComponent;
  let fixture: ComponentFixture<HeroMenuComponent>;
  let store: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot(reducers, storeConfig),
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
    store = TestBed.get<Store<AppState>>(Store);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should allow hiring with sufficient gold', () => {
    // Arrange
    const hiringFee = 10;
    component.gold = hiringFee;

    // Act
    const result = component.canHireHero(hiringFee);

    // Assert
    expect(result).toBe(true);
  });

  it('should not allow hiring with insufficient gold', () => {
    // Arrange
    const hiringFee = 10;
    component.gold = hiringFee - 1;

    // Act
    const result = component.canHireHero(hiringFee);

    // Assert
    expect(result).toBe(false);
  });

  it('should dispatch assignMissionToHero', () => {
    // Arrange
    component.mission = uniqueMissions[0];
    const action = HeroActions.assignMissionToHero({ hero: fakeHero, missionId: component.mission.id });
    const spy = spyOn(store, 'dispatch');

    // Act
    component.assignHeroToMission(fakeHero);

    // Assert
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch assignMissionToHero when mission is undefined', () => {
    // Arrange
    component.mission = undefined;
    const spy = spyOn(store, 'dispatch');
    const errorSpy = spyOn(console, 'error');
    // Act
    component.assignHeroToMission(fakeHero);

    // Assert
    expect(spy).toHaveBeenCalledTimes(0);
    expect(errorSpy).toHaveBeenCalledTimes(1);
  });

  it('should dispatch unassignMissionFromHero', () => {
    // Arrange
    const action = HeroActions.unassignMissionFromHero({ hero: fakeHero });
    const spy = spyOn(store, 'dispatch');

    // Act
    component.unassignHeroFromMission(fakeHero);

    // Assert
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch recruit actions', () => {
    // Arrange
    const hireAction = HeroActions.hireHero({ hero: fakeHero });
    const removeAction = HeroActions.removeRecruitableHero({ hero: fakeHero });
    const goldAction = ResourceActions.substractGold(fakeHero.hiringFee);

    spyOn(component, 'canHireHero').and.returnValue(true);
    const spy = spyOn(store, 'dispatch');

    // Act
    component.recruit(fakeHero);

    // Assert
    expect(spy).toHaveBeenCalledWith(hireAction);
    expect(spy).toHaveBeenCalledWith(removeAction);
    expect(spy).toHaveBeenCalledWith(goldAction);
    expect(spy).toHaveBeenCalledTimes(3);
  });

  it('should check if hero can be hired', () => {
    // Arrange
    const spy = spyOn(component, 'canHireHero');

    // Act
    component.recruit(fakeHero);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
