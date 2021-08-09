import {Module} from '@nestjs/common';
import {ApartmentsHttpModule} from './http';

@Module({
	imports: [ApartmentsHttpModule],
})
export class ApartmentPortsModule {}
