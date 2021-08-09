import {Period} from './period';

describe('Record', () => {
	describe('calculation days', () => {
		it('should be successfully count the days for each month', () => {
			const expected = {
				7: 18,
				8: 9,
			};

			const period = new Period(
				new Date('2021-08-14'),
				new Date('2021-09-09'),
			);

			const result = period.calculateDaysByMonths();

			expect(result).toMatchObject(expected);
		});

		it('should be successfully count the days for one month', () => {
			const expected = {
				7: 17,
			};

			const period = new Period(
				new Date('2021-08-14'),
				new Date('2021-08-30'),
			);

			const result = period.calculateDaysByMonths();

			expect(result).toMatchObject(expected);
		});
	});
});
