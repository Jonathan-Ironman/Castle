import { Action, createReducer, on } from '@ngrx/store';
import { Report } from '../../models/report.model';
import { ReportActions } from '../actions/report.actions';

export type ReportState = readonly Report[];
export const initialState: readonly Report[] = [];
export const maxReports = 100;

const reducer = createReducer(
  initialState,
  on(ReportActions.addReport, (state, payload) => {
    const reports = [payload.report, ...state];
    if (reports.length > maxReports) {
      reports.pop();
    }
    return reports;
  })
);

export function reportReducer(
  state: Readonly<ReportState> | undefined,
  action: Action
) {
  return reducer(state, action);
}
