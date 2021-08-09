import {Module} from '@nestjs/common';
import {ReportHttpController} from './report-http-controller';
import { ReportsApplicationModule } from '../../application'

@Module({
	imports: [ReportsApplicationModule],
	controllers: [ReportHttpController],
})
export class ReportHttpModule {}
