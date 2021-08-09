import {Controller, Get, Query} from '@nestjs/common';
import {ApartmentQueriesService, ApartmentCommandsService} from '../../application';

@Controller('apartments')
export class ApartmentsHttpController {
	public constructor(
		private readonly apartmentQueriesService: ApartmentQueriesService,
		private readonly apartmentCommandsService: ApartmentCommandsService,
	) {}

	@Get()
	public async getApartments(
		@Query('type') type = 'all',
		@Query('from') from: string,
		@Query('from') to: string,
	) {
		let apartments = null;

		switch (type) {
			case 'all':
				apartments = await this.apartmentQueriesService.getApartments();
				break;
			case 'available':
				apartments = await this.apartmentQueriesService.getAvailableInPeriodApartments(
					new Date(from),
					new Date(to),
				);
				break;
		}

		return {
			success: true,
			data: {
				apartments,
			},
		};
	}
}
