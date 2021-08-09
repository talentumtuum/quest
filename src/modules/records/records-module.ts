import {Module} from '@nestjs/common';
import {RecordPortsModule} from './ports';

@Module({
	imports: [RecordPortsModule],
})
export class RecordsModule {}
