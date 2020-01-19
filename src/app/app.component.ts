import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { UserActions } from './store/actions/user.actions';
import { AppState } from './store/reducers';
import * as Hammer from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Castle';

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    const hammer = new Hammer(document.documentElement);

    hammer.on('swipeleft swiperight', event => {
      if (event.type === 'swiperight') {
        this.store.dispatch(UserActions.swipeRight());
      } else if (event.type === 'swipeleft') {
        this.store.dispatch(UserActions.swipeLeft());
      }
    });
  }
}
