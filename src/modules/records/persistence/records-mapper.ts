import {Injectable} from '@nestjs/common';
import {Period} from '../../../common';
import {Record} from '../domain/entities';

@Injectable()
export class RecordsMapper {
	public toAggregate(data: any[]): Record[];
	public toAggregate(data: any): Record;
	public toAggregate(data: any): Record | Record[] {
		return Array.isArray(data)
			? data.map(this.entityToAggregate)
			: this.entityToAggregate(data);
	}

	private readonly entityToAggregate = (entity: any): Record => {
		const period = new Period(entity.periodFrom, entity.periodTo);
		const record = new Record(
			entity.apartmentId,
			period,
			entity.apartmentPrice,
			entity.recordId,
			entity.price,
		);

		return record;
	};
}
