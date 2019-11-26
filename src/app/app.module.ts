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

@NgModule({
  declarations: [AppComponent, CastleComponent, StatusBarComponent],
  imports: [
    BrowserModule,
    StoreModule.forRoot([resourceReducer], {
      initialState: [appState]
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
