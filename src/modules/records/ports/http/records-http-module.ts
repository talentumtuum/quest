import {Module} from '@nestjs/common';
import {RecordsApplicationModule} from '../../application';
import {RecordsHttpController} from './records-http-controller';

@Module({
	imports: [RecordsApplicationModule],
	controllers: [RecordsHttpController],
})
export class RecordsHttpModule {}
