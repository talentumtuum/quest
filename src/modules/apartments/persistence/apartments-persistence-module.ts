import {Module} from '@nestjs/common';
import {ApartmentsRepository} from './apartments-repository';
import {ApartmentsMapper} from './apartments-mapper';

@Module({
	providers: [ApartmentsRepository, ApartmentsMapper],
	exports: [ApartmentsRepository],
})
export class ApartmentsPersistenceModule {}
