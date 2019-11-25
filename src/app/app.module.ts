import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';

import { AppComponent } from './app.component';
import { CastleComponent } from './castle/castle.component';
import { StatusBarComponent } from './status-bar/status-bar.component';

import { resourceReducer } from './store/reducers/reducers';
import { appState } from './app.store';

@NgModule({
  declarations: [AppComponent, CastleComponent, StatusBarComponent],
  imports: [
    BrowserModule,
    // TODO: ?
    StoreModule.forRoot([resourceReducer], {
      initialState: [appState]
    })
    // StoreDevtoolsModule.instrumentOnlyWithExtension()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
