import { ReportType } from '../misc/report-type.enum';

export class Report {
    readonly id: number;
    readonly title: string;
    readonly text: string;
    readonly tick: number;
    readonly reportType: ReportType;

    constructor(report: Report) {
        Object.assign(this, report);
    }
}
