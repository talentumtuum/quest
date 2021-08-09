import {Period, Record} from '../../../records/domain';
import {MonthVisitMap} from './month-visit-map';

describe('MonthVisitMap', () => {
	describe('createFromRecords', () => {
		it('should be create a valid map of visits', () => {
			const expected = {
				7: 34,
				8: 8,
			};

			const records = [
				new Record(
					1 as any,
					new Period(
						new Date('2021-08-06'),
						new Date('2021-08-12'),
					),
					1000,
				),
				new Record(
					1 as any,
					new Period(
						new Date('2021-08-06'),
						new Date('2021-09-06'),
					),
					1000,
				),
				new Record(
					1 as any,
					new Period(
						new Date('2021-08-31'),
						new Date('2021-09-02'),
					),
					1000,
				),
			];

			const map = MonthVisitMap.createFromRecords(records);

			expect(map).toMatchObject(expected);
		});

		it('should be humanize result', () => {
			const expected = {
				August: 7,
				September: 8,
			};

			const records = [
				new Record(
					1 as any,
					new Period(
						new Date('2021-08-06'),
						new Date('2021-08-12'),
					),
					1000,
				),
				new Record(
					1 as any,
					new Period(
						new Date('2021-09-06'),
						new Date('2021-09-13'),
					),
					1000,
				),
			];

			const map = MonthVisitMap.createFromRecords(records).humanize();

			expect(map).toMatchObject(expected);
		});
	});
});
