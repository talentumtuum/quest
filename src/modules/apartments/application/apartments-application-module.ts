import {Module} from '@nestjs/common';
import {RecordsApplicationModule} from '../../records/application';
import {ApartmentsPersistenceModule} from '../persistence';
import {ApartmentCommandsService, ApartmentQueriesService} from './services';

@Module({
	imports: [ApartmentsPersistenceModule, RecordsApplicationModule],
	providers: [ApartmentCommandsService, ApartmentQueriesService],
	exports: [ApartmentCommandsService, ApartmentQueriesService],
})
export class ApartmentsApplicationModule {}
