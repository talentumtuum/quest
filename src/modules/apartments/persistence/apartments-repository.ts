import {Inject, Injectable} from '@nestjs/common';
import {NEST_PGPROMISE_CONNECTION} from 'nestjs-pgpromise';
import {IDatabase} from 'pg-promise';
import {ApartmentsMapper} from './apartments-mapper';

@Injectable()
export class ApartmentsRepository {
	public constructor(
		@Inject(NEST_PGPROMISE_CONNECTION)
		private readonly connection: IDatabase<any>,
		private readonly apartmentsMapper: ApartmentsMapper,
	) {}

	public getApartments = async () => {
		const apartments: any[] = await this.connection.query('SELECT * FROM apartment');

		if (apartments.length === 0) {
			return [];
		}

		return this.apartmentsMapper.toAggregate(apartments);
	};

	public getApartmentById = async (apartmentId: bigint) => {
		const [apartment] = await this.connection.query('SELECT * FROM apartment WHERE "apartmentId" = $1', [apartmentId]);

		if (!apartment) {
			return;
		}

		return this.apartmentsMapper.toAggregate(apartment);
	};
}
