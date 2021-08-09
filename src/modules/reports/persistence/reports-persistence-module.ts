import {Module} from '@nestjs/common';
import {ReportsRepository} from './reports-repository';
import {ReportsMapper} from './reports-mapper';

@Module({
	providers: [ReportsRepository, ReportsMapper],
	exports: [ReportsRepository],
})
export class ReportsPersistenceModule {}
