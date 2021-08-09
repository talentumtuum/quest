import {Controller, Post, Get, Body} from '@nestjs/common';
import {RecordCommandsService, RecordQueriesService} from '../../application';
import { CreateRecordDto } from './dto'

@Controller('records')
export class RecordsHttpController {
	public constructor(
		private readonly recordCommandsService: RecordCommandsService,
		private readonly recordQueriesService: RecordQueriesService,
	) {}

	@Post()
	public async createRecord(@Body() body: CreateRecordDto) {
		await this.recordCommandsService.createRecord({
			apartmentId: body.apartmentId,
			from: new Date(body.from),
			to: new Date(body.to),
		});

		return {
			status: true,
		};
	}

	@Get()
	public async getRecords() {
		const records = await this.recordQueriesService.getRecords();

		return {
			status: true,
			data: {
				records,
			},
		};
	}
}
