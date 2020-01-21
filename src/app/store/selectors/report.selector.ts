import { createSelector } from '@ngrx/store';
import { selectReportState } from '../reducers';

export const ReportSelectors = {
    reports: createSelector(selectReportState, state => state),
};
