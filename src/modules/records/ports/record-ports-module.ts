import {Module} from '@nestjs/common';
import {RecordsHttpModule} from './http';

@Module({
	imports: [RecordsHttpModule],
})
export class RecordPortsModule {}
