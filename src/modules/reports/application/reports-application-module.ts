import {Module} from '@nestjs/common';
import {ReportsPersistenceModule} from '../persistence';
import {ReportQueriesService, ReportCommandsService} from './services';
import { RecordsApplicationModule } from '../../records/application'

@Module({
	imports: [ReportsPersistenceModule, RecordsApplicationModule],
	providers: [ReportQueriesService, ReportCommandsService],
	exports: [ReportQueriesService, ReportCommandsService],
})
export class ReportsApplicationModule {}
