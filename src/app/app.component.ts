import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './store/actions/user.actions';
import { AppState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Castle';

  constructor(private store: Store<AppState>) { }

  swipeLeft() {
    this.store.dispatch(UserActions.swipeLeft());
  }

  swipeRight() {
    this.store.dispatch(UserActions.swipeRight());
  }
}
