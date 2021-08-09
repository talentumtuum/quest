import {Module} from '@nestjs/common';
import {ReportHttpModule} from './http';

@Module({
	imports: [ReportHttpModule],
})
export class ReportPortsModule {}
