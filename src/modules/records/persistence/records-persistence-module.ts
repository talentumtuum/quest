import {Module} from '@nestjs/common';
import {RecordsMapper} from './records-mapper';
import {RecordsRepository} from './records-repository';

@Module({
	providers: [RecordsRepository, RecordsMapper],
	exports: [RecordsRepository],
})
export class RecordsPersistenceModule {}
