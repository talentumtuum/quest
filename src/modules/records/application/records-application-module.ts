import {forwardRef, Module} from '@nestjs/common';
import {ApartmentsApplicationModule} from '../../apartments/application';
import {RecordsPersistenceModule} from '../persistence';
import {RecordCommandsService, RecordQueriesService} from './services';

@Module({
	imports: [RecordsPersistenceModule, forwardRef(() => ApartmentsApplicationModule)],
	providers: [RecordCommandsService, RecordQueriesService],
	exports: [RecordCommandsService, RecordQueriesService],
})
export class RecordsApplicationModule {}
