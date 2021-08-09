import {Injectable} from '@nestjs/common';
import {ApartmentsRepository} from '../../persistence';

@Injectable()
export class ApartmentCommandsService {
	public constructor(
		private readonly apartmentsRepository: ApartmentsRepository,
	) {}
}
