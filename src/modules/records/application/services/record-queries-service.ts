import {Injectable} from '@nestjs/common';
import {RecordsRepository} from '../../persistence';

@Injectable()
export class RecordQueriesService {
	public constructor(
		private readonly recordsRepository: RecordsRepository,
	) {}

	public getRecords = async () => this.recordsRepository.getRecords();

	public getRecordsInPeriod = async (from: Date, to: Date) => this.recordsRepository.getRecordsInPeriod(from, to);
}
