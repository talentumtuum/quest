import {Module} from '@nestjs/common';
import {ApartmentPortsModule} from './ports';

@Module({
	imports: [ApartmentPortsModule],
})
export class ApartmentsModule {}
