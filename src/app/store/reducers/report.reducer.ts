import { Action, createReducer, on } from '@ngrx/store';
import { Report } from '../../models/report.model';
import { ReportActions } from '../actions/report.actions';

export type ReportState = readonly Report[];
export const initialState: readonly Report[] = [];

const reducer = createReducer(
  initialState,
  on(ReportActions.addReport, (state, payload) => [payload.report, ...state]),
);

export function reportReducer(state: Readonly<ReportState> | undefined, action: Action) {
  return reducer(state, action);
}
