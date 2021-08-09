import {Injectable} from '@nestjs/common';
import {RecordQueriesService} from '../../../records/application';
import {ReportsRepository} from '../../persistence';
import {Report, MonthVisitMap} from '../../domain';
import {Period} from '../../../../common';

@Injectable()
export class ReportCommandsService {
	public constructor(
		private readonly reportRepository: ReportsRepository,
		private readonly recordsQueriesService: RecordQueriesService,
	) {}

	public async createReport({from, to}: any) {
		const records = await this.recordsQueriesService.getRecordsInPeriod(from, to);

		if (records.length === 0) {
			throw new Error('records not found');
		}

		const report = new Report(
			null,
			new Period(from, to),
			MonthVisitMap.createFromRecords(records),
		);

		const savedReport = await this.reportRepository.save(report);

		return {
			...savedReport,
			monthVisitMap: savedReport.monthVisitMap.humanize(),
		};
	}
}
