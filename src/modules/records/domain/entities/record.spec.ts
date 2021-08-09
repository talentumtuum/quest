import {Period} from '../../../../common';
import {Record} from './record';

describe('Record', () => {
	describe('price calc', () => {
		it('should calculate a price', () => {
			const roomPrice = 1000;
			const expectedPrice = 4000;

			const record = new Record(
				1 as any,
				new Period(
					new Date('2021-08-06'),
					new Date('2021-08-09'),
				),
				roomPrice,
			);

			expect(record.price).toBe(expectedPrice);
		});

		it('should calculate a price without discount', () => {
			const roomPrice = 1000;
			const expectedPrice = 10_000;

			const record = new Record(
				1 as any,
				new Period(
					new Date('2021-08-06'),
					new Date('2021-08-15'),
				),
				roomPrice,
			);

			expect(record.price).toBe(expectedPrice);
		});

		it('should calculate a price with 10% discount', () => {
			const roomPrice = 1000;
			const expectedPrice = 9900;

			const record = new Record(
				1 as any,
				new Period(
					new Date('2021-08-06'),
					new Date('2021-08-16'),
				),
				roomPrice,
			);

			expect(record.price).toBe(expectedPrice);
		});

		it('should calculate a price with 20% discount', () => {
			const roomPrice = 1000;
			const expectedPrice = 17_600;

			const record = new Record(
				1 as any,
				new Period(
					new Date('2021-08-06'),
					new Date('2021-08-27'),
				),
				roomPrice,
			);

			expect(record.price).toBe(expectedPrice);
		});
	});
});
