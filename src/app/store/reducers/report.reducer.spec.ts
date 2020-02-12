import { reportReducer, initialState, maxReports } from './report.reducer';
import { Report } from '../../models/report.model';
import { ReportType } from 'src/app/misc/report-type.enum';
import { ReportActions } from '../actions/report.actions';

describe('Report Reducer', () => {
  const report = new Report({
    id: 1,
    title: 'title',
    text: 'content',
    tick: 1,
    reportType: ReportType.mission
  });

  it('should return the previous state', () => {
    const action = {} as any;
    const result = reportReducer(initialState, action);
    expect(result).toBe(initialState);
  });

  it('should add reports (in the front)', () => {
    const action = ReportActions.addReport({ report });
    const result = reportReducer([{ ...report, id: 2 }], action);
    expect(result[0].id).toEqual(report.id);
    expect(result.length).toEqual(2);
  });

  it('should have a maximum of reports', () => {
    let id = 1;
    const state = [];
    let result: readonly Report[];
    let count = maxReports + 1;
    while (count--) {
      const action = ReportActions.addReport({
        report: { ...report, id: id++ }
      });
      result = reportReducer(state, action);
      state.length = 0;
      [].push.apply(state, result);
    }
    expect(maxReports).toBeGreaterThan(1);
    expect(state.length).toEqual(maxReports);
    expect(state[0].id).toEqual(maxReports + 1);
  });
});
