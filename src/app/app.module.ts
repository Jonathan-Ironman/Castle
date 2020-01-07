import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';
import { MatCardModule } from '@angular/material/card';

import { resourceReducer } from './store/reducers/reducers';
import { appState } from './app.store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormsModule } from '@angular/forms';
import { ActionButtonComponent } from './components/action-button/action-button.component';
import { MissionSectionComponent } from './components/mission-section/mission-section.component';
@NgModule({
  declarations: [
    AppComponent,
    StatusBarComponent,
    MenuComponent,
    HeroMenuComponent,
    ActionButtonComponent,
    MissionSectionComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot([resourceReducer], {
      initialState: [appState]
    }),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSelectModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatMenuModule,
    MatCardModule,
    MatButtonToggleModule,
    FormsModule
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
