import {forwardRef, Inject, Injectable} from '@nestjs/common';
import {ApartmentQueriesService} from '../../../apartments/application';
import {Period, Record} from '../../domain';
import {RecordsRepository} from '../../persistence';

@Injectable()
export class RecordCommandsService {
	public constructor(
		private readonly recordsRepository: RecordsRepository,
		@Inject(forwardRef(() => ApartmentQueriesService))
		private readonly apartmentQueriesService: ApartmentQueriesService,
	) {}

	public createRecord = async ({apartmentId, from, to}) => {
 		const apartment = await this.apartmentQueriesService.getApartmentById(apartmentId);

		 if (!apartment) {
			throw new Error('apartment not found');
		 }

		const record = new Record(
			apartment.apartmentId,
			new Period(from, to),
			apartment.price,
		);

		Record.validate(record);

		await this.recordsRepository.save(record);
	};
}
