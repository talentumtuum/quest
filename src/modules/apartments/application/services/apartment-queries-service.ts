import {Injectable} from '@nestjs/common';
import {RecordQueriesService} from '../../../records/application';
import {ApartmentsRepository} from '../../persistence';

@Injectable()
export class ApartmentQueriesService {
	public constructor(
		private readonly apartmentsRepository: ApartmentsRepository,
		private readonly recordQueriesService: RecordQueriesService,
	) {}

	public getApartments = async () => this.apartmentsRepository.getApartments();

	public getApartmentById = async (apartmentId: bigint) => this.apartmentsRepository.getApartmentById(apartmentId);

	public getAvailableInPeriodApartments = async (from: Date, to: Date) => {
		const apartments = await this.getApartments();

		if (apartments.length === 0) {
			throw new Error('apartmens not found');
		}

		const records = await this.recordQueriesService.getRecordsInPeriod(from, to);
		const recordIds = new Set(records.map(record => record.apartmentId));
		const availableApartments = apartments.filter(apartment => !recordIds.has(apartment.apartmentId));

		return availableApartments;
	};
}

