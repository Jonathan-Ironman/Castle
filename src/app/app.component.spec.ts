import { LayoutModule } from '@angular/cdk/layout';
import { waitForAsync, TestBed } from '@angular/core/testing';
import { Firestore } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material/material.module';
import { appRoutes } from './routes';
import { HeroService } from './services/hero.service';
import { reducers } from './store/reducers';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { storeConfig } from './app.module';

const HeroServiceStub = {
  createHero: () => {}
};

describe('AppComponent', () => {
  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [
        ActionButtonComponent,
        AppComponent,
        HeroMenuComponent,
        MenuComponent,
        MissionSectionComponent,
        StatusBarComponent,
        ToolbarComponent,
        MissionControlComponent
      ],
      imports: [
        FormsModule,
        LayoutModule,
        MaterialModule,
        RouterModule,
        RouterModule.forRoot(appRoutes),
        StoreModule.forRoot(reducers, storeConfig)
      ],
      providers: [
        { provide: Firestore, useValue: { collection: () => ({}), doc: () => ({}) } },
        { provide: HeroService, useValue: HeroServiceStub }
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });
});
