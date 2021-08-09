import {Period} from '../../../../common';
import {MonthVisitMap} from './month-visit-map';

export class Report {
	public constructor(
		public readonly reportId: bigint | null = null,
		public readonly period: Period,
		public readonly monthVisitMap: MonthVisitMap,
	) {}
}
