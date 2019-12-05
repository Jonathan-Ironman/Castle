import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CastleComponent } from './components/castle/castle.component';
import { StatusBarComponent } from './components/status-bar/status-bar.component';

import { resourceReducer } from './store/reducers/reducers';
import { appState } from './app.store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { MenuComponent } from './components/menu/menu.component';
import { HeroMenuComponent } from './components/hero-menu/hero-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    CastleComponent,
    StatusBarComponent,
    MenuComponent,
    HeroMenuComponent
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
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSliderModule,
    MatMenuModule
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
