import {Inject, Injectable} from '@nestjs/common';
import {NEST_PGPROMISE_CONNECTION} from 'nestjs-pgpromise';
import {IDatabase} from 'pg-promise';
import {Report, MonthVisitMap} from '../domain';
import {Period} from '../../../common';
import {ReportsMapper} from './reports-mapper';

@Injectable()
export class ReportsRepository {
	public constructor(
		@Inject(NEST_PGPROMISE_CONNECTION)
		private readonly connection: IDatabase<any>,
		private readonly reportsMapper: ReportsMapper,
	) {}

	public save = async (report: Report) => {
		const [result] = await this.connection.query(
			'INSERT INTO report ("periodFrom", "periodTo", "monthVisitMap") VALUES ($1, $2, $3)  RETURNING "reportId"',
			[report.period.from, report.period.to, report.monthVisitMap],
		);

		const savedReport = new Report(
			result.reportId,
			new Period(report.period.from, report.period.to),
			new MonthVisitMap(report.monthVisitMap),
		);

		return savedReport;
	};
}
