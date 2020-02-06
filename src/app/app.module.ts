import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { ServiceWorkerModule } from '@angular/service-worker';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';
import { MenuComponent } from './components/menu/menu.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { appRoutes } from './routes';
import { reducers } from './store/reducers';
import { MaterialModule } from './material/material.module';
import { MissionControlComponent } from './components/mission-control/mission-control.component';
import { metaReducers } from './store/reducers/index';

export const storeConfig = {
  metaReducers,
  runtimeChecks: {
    strictStateImmutability: true,
    strictActionImmutability: true,
    strictStateSerializability: true,
    // strictActionSerializability: true,
  }
};

@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    MenuComponent,
    HeroMenuComponent,
    ActionButtonComponent,
    MissionSectionComponent,
    ToolbarComponent,
    MissionControlComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers, storeConfig),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    RouterModule.forRoot(
      appRoutes,
      // { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    LayoutModule,
    MaterialModule,
    FormsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
