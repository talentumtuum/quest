import {Controller, Get, Query} from '@nestjs/common';
import {ReportCommandsService, ReportQueriesService} from '../../application';

@Controller('reports')
export class ReportHttpController {
	public constructor(
		private readonly reportQueriesService: ReportQueriesService,
		private readonly reportCommandsService: ReportCommandsService,
	) {}

	@Get()
	public async getReports(
	@Query('from') from: string,
		@Query('to') to: string,
	) {
		const report = await this.reportCommandsService.createReport({from, to});
		return {
			success: true,
			data: {
				report,
			},
		};
	}
}
