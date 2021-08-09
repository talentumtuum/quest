import {Module} from '@nestjs/common';
import {ReportsApplicationModule} from '../../application';
import {ReportHttpController} from './report-http-controller';

@Module({
	imports: [ReportsApplicationModule],
	controllers: [ReportHttpController],
})
export class ReportHttpModule {}
