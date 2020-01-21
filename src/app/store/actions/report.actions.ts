import { createAction, props } from '@ngrx/store';
import { Report } from '../../models/report.model';

export const ReportActions = {
  addReport: createAction('[Report] Add report', props<Report>()),
};
