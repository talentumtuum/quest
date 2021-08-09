import {Record} from '../../../records/domain';
import {MonthVisitMapProperties} from '../interfaces';

const monthMap = {
	en: {
		0: 'January',
		1: 'February',
		2: 'March',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'August',
		8: 'September',
		9: 'October',
		10: 'November',
		11: 'December',
	},
};

const monthIds = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

export class MonthVisitMap implements MonthVisitMapProperties {
	public static createFromRecords(records: Record[]): MonthVisitMap {
		const map = records.reduce(
			(map, record) => map.merge(record.period.calculateDaysByMonths()),
			new MonthVisitMap(),
		);
		return new MonthVisitMap(map);
	}

	public 0 = null;
	public 1 = null;
	public 2 = null;
	public 3 = null;
	public 4 = null;
	public 5 = null;
	public 6 = null;
	public 7 = null;
	public 8 = null;
	public 9 = null;
	public 10 = null;
	public 11 = null;

	public constructor(map?: Partial<MonthVisitMapProperties>) {
		if (map !== undefined) {
			this.applyMap(map);
		}
	}

	public humanize() {
		return monthIds
			.reduce((result, id) => Object.assign(
				{},
				result,
				this[id] !== null ? {[monthMap.en[id]]: this[id]} : void 0,
			), {});
	}

	public merge(map: Partial<MonthVisitMapProperties>) {
		for (const [key, value] of Object
			.entries(map)) {
			if (this[key] !== null) {
				this[key] = this[key] + value;
			} else {
				this[key] = value;
			}
		}

		return this;
	}

	private readonly applyMap = (map: Partial<MonthVisitMapProperties>) => {
		for (const [key, value] of Object
			.entries(map)) {
			this[key] = value;
		}
	};
}
