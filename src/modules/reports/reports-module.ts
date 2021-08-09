import {Module} from '@nestjs/common';
import {ReportPortsModule} from './ports';

@Module({
	imports: [ReportPortsModule],
})
export class ReportsModule {}
