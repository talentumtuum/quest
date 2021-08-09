import {Injectable } from '@nestjs/common';
import { RecordQueriesService } from '../../../records/application';
import {ApartmentsRepository} from '../../persistence';

@Injectable()
export class ApartmentQueriesService {
	public constructor(
		private readonly apartmentsRepository: ApartmentsRepository,
		private readonly recordQueriesService: RecordQueriesService,
	) {}

	public getApartments = () => {
		return this.apartmentsRepository.getApartments();
	}

	public getApartmentById = (apartmentId: bigint) => {
		return this.apartmentsRepository.getApartmentById(apartmentId);
	}

	public getAvailableInPeriodApartments = async (from: Date, to: Date) => {
		const apartments = await this.getApartments();

		if (!apartments.length) {
			throw new Error('apartmens not found');
		}

		const records = await this.recordQueriesService.getRecordsInPeriod(from, to);
		const recordIds = records.map(record => record.apartmentId);
		const availableApartments = apartments.filter((apartment) => !recordIds.includes(apartment.apartmentId))

		return availableApartments
	}
}

