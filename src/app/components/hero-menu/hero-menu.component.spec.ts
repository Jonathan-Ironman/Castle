import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { Store, StoreModule } from '@ngrx/store';
import { uniqueMissions } from 'src/app/misc/missions';
import { appRoutes } from 'src/app/routes';
import { HeroActions } from 'src/app/store/actions/hero.actions';
import { reducers } from 'src/app/store/reducers';
import { MaterialModule } from '../../material/material.module';
import { HeroService } from '../../services/hero.service';
import { AppState } from '../../store/reducers';
import { ActionButtonComponent } from '../action-button/action-button.component';
import { HeroMenuComponent } from './hero-menu.component';
import { ResourceActions } from 'src/app/store/actions/resource.actions';
import { Hero } from 'src/app/models/hero.model';

describe('HeroMenuComponent', () => {
  let component: HeroMenuComponent;
  let fixture: ComponentFixture<HeroMenuComponent>;
  let store: Store<AppState>;
  let hero: Hero;

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
    store = TestBed.get<Store<AppState>>(Store);

    const heroService = new HeroService(store);
    hero = heroService.createHero(1);

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
    const action = HeroActions.assignMissionToHero({ hero, missionId: component.mission.id });
    const spy = spyOn(store, 'dispatch');

    // Act
    component.assignHeroToMission(hero);

    // Assert
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should not dispatch assignMissionToHero when mission is undefined', () => {
    // Arrange
    component.mission = undefined;
    const spy = spyOn(store, 'dispatch');

    // Act
    component.assignHeroToMission(hero);

    // Assert
    expect(spy).toHaveBeenCalledTimes(0);
  });

  it('should dispatch unassignMissionFromHero', () => {
    // Arrange
    const action = HeroActions.unassignMissionFromHero({ hero });
    const spy = spyOn(store, 'dispatch');

    // Act
    component.unassignHeroFromMission(hero);

    // Assert
    expect(spy).toHaveBeenCalledWith(action);
  });

  it('should dispatch recruit actions', () => {
    // Arrange
    const hireAction = HeroActions.hireHero({ hero });
    const removeAction = HeroActions.removeRecruitableHero({ hero });
    const goldAction = ResourceActions.substractGold(hero.hiringFee);

    spyOn(component, 'canHireHero').and.returnValue(true);
    const spy = spyOn(store, 'dispatch');

    // Act
    component.recruit(hero);

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
    component.recruit(hero);

    // Assert
    expect(spy).toHaveBeenCalledTimes(1);
  });
});
