import {Injectable} from '@nestjs/common';
import {Period} from '../../../common';
import {Report} from '../domain';

@Injectable()
export class ReportsMapper {
	public toAggregate(entity: any[]): Report[]
	public toAggregate(entity: any): Report
	public toAggregate(entity: any): Report | Report[] {
		return Array.isArray(entity)
			? entity.map(this.entityToAggregate)
			: this.entityToAggregate(entity);
	}

	private readonly entityToAggregate = (entity: any): Report => {
		const report = new Report(
			entity.reportId,
			new Period(entity.periodFrom, entity.periodTo),
			entity.monthVisitMap,
		);
		return report;
	};
}
