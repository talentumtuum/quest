import {Module} from '@nestjs/common';
import {NestPgpromiseModule} from 'nestjs-pgpromise';
import {ApartmentsModule} from './modules/apartments';
import {RecordsModule} from './modules/records';
import {ReportsModule} from './modules/reports';

@Module({
	imports: [
		NestPgpromiseModule.register({connection: process.env.POSTGRES_CONNECTION_STRING}),
		ApartmentsModule,
		RecordsModule,
		ReportsModule,
	],
})
export class ApplicationModule {}
