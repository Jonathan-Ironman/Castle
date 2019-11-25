import * as Actions from '../actions/actions';
import { appState, AppState } from 'src/app/app.store';

export function resourceReducer(state = appState, action): AppState {
  switch (action.type) {
    case Actions.ADD_GOLD:
      return {
        ...state,
        gold: state.gold++
      };
  }
}
