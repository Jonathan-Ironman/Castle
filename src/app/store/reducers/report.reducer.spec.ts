import { reportReducer, initialState } from './report.reducer';
import { Report } from '../../models/report.model';
import { ReportType } from 'src/app/misc/report-type.enum';
import { ReportActions } from '../actions/report.actions';

describe('Report Reducer', () => {
  it('should return the previous state', () => {
    const action = {} as any;
    const result = reportReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should add reports', () => {
    const report = new Report({
      id: 1,
      title: 'title',
      text: 'content',
      tick: 1,
      reportType: ReportType.mission
    });
    const action = ReportActions.addReport({ report });
    const result = reportReducer([], action);
    expect(result[0].text).toEqual(report.text);
  });
});
