import * as Actions from '../actions/actions';
import { appState, AppState } from 'src/app/app.store';

export function resourceReducer(
  state = appState,
  action: Actions.ACTION_ADD_GOLD | Actions.ACTION_ADD_HERO
): AppState {
  switch (action.type) {
    case Actions.ADD_GOLD:
      return {
        ...state,
        gold: state.gold + action.payload
      };
    case Actions.ADD_HERO:
      state.heroes.push(action.payload);
      return state;
    default:
      return state;
  }
}
