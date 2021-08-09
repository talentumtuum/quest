import {forwardRef, Module} from '@nestjs/common';
import { ApartmentsApplicationModule } from '../../apartments/application'
import {RecordCommandsService, RecordQueriesService} from './services';
import { RecordsPersistenceModule } from '../persistence'

@Module({
	imports: [RecordsPersistenceModule, forwardRef(() => ApartmentsApplicationModule)],
	providers: [RecordCommandsService, RecordQueriesService],
	exports: [RecordCommandsService, RecordQueriesService],
})
export class RecordsApplicationModule {}
