import {Injectable, Inject} from '@nestjs/common';
import {NEST_PGPROMISE_CONNECTION} from 'nestjs-pgpromise';
import {IDatabase} from 'pg-promise';
import {Record} from '../domain';
import {RecordsMapper} from './records-mapper';

@Injectable()
export class RecordsRepository {
	public constructor(
		@Inject(NEST_PGPROMISE_CONNECTION)
		private readonly connection: IDatabase<any>,
		private readonly recordsMapper: RecordsMapper,
	) {}

	public getRecords = async () => {
		const result = await this.connection.query('SELECT * FROM record');
		return this.recordsMapper.toAggregate(result);
	};

	public getRecordById = async (recordId: number) => {
		const result = await this.connection.query('SELECT * FROM record WHERE "recordId" = $1', [recordId]);

		if (result.length === 0) {
			return;
		}

		return this.recordsMapper.toAggregate(result);
	};

	public getRecordsInPeriod = async (from: Date, to: Date) => {
		const result: any[] = await this.connection.query('SELECT * FROM record WHERE ("periodFrom", "periodTo") OVERLAPS($1, $2)', [from, to]);

		if (result.length === 0) {
			return [];
		}

		return this.recordsMapper.toAggregate(result);
	};

	public save = async (record: Record) => {
		await this.connection.query(
			'INSERT INTO record ("apartmentId", "periodFrom", "periodTo", price, "apartmentPrice") VALUES ($1, $2, $3, $4, $5)',
			[record.apartmentId, record.period.from, record.period.to, record.price, record.apartmentPrice],
		);
	};
}
