import {Module} from '@nestjs/common';
import {ApartmentsApplicationModule} from '../../application';
import {ApartmentsHttpController} from './apartments-http-controller';

@Module({
	imports: [ApartmentsApplicationModule],
	controllers: [ApartmentsHttpController],
})
export class ApartmentsHttpModule {}
