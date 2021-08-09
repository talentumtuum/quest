import {Module} from '@nestjs/common';
import {ReportsPersistenceModule} from '../persistence';
import {RecordsApplicationModule} from '../../records/application';
import {ReportQueriesService, ReportCommandsService} from './services';

@Module({
	imports: [ReportsPersistenceModule, RecordsApplicationModule],
	providers: [ReportQueriesService, ReportCommandsService],
	exports: [ReportQueriesService, ReportCommandsService],
})
export class ReportsApplicationModule {}
