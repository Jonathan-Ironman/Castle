import { ActionReducer } from '@ngrx/store';
import { DataService } from '../../services/data.service';
import { DataActions } from '../actions/data.actions';

export function dataReducer(reducer: ActionReducer<any>): ActionReducer<any> {
  return (state, action) => {
    if (action.type === DataActions.loadState.type) {
      state = DataService.loadData();
    }

    if (action.type === DataActions.resetState.type) {
      state = undefined;
    }

    return reducer(state, action);
  };
}