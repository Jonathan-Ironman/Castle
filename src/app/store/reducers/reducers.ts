import * as Actions from '../actions/actions';
import { appState, AppStore } from 'src/app/app.store';
import { Action } from '@ngrx/store';

export function resourceReducer(
  state = appState,
  action: Actions.ACTION_ADD_GOLD
): AppStore {
  switch (action.type) {
    case Actions.ADD_GOLD:
      return {
        ...state,
        gold: state.gold + action.payload
      };
    default:
      return state;
  }
}
