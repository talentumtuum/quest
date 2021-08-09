import {Period} from '../../../../common';
import {RecordProperties} from '../interfaces';

enum WeekDay {
	Sunday = 0,
	Monday = 1,
	Tuesday = 2,
	Wednesday = 3,
	Thursday = 4,
	Friday = 5,
	Saturday = 6,
}

export class Record implements RecordProperties {
	public static validate = (record: Record) => {
		const start = record.period.from.getDay();
		const end = record.period.to.getDay();

		if ([start, end].includes(WeekDay.Monday)) {
			throw new Error('Ooops! Monday unavailable!');
		}

		if ([start, end].includes(WeekDay.Thursday)) {
			throw new Error('Ooops! Thursday unavailable!');
		}
	};

	public static get OVER_10_DAYS_DISCOUNT() {
		return 0.9;
	}

	public static get OVER_20_DAYS_DISCOUNT() {
		return 0.8;
	}

	public price: number;

	public constructor(
		public readonly apartmentId: bigint,
		public readonly period: Period,
		public readonly apartmentPrice: number,
		public readonly recordId?: bigint,
		price?: number,
	) {
		this.price = price !== undefined
			? price
			: this.calculatePrice();
	}

	private readonly calculatePrice = (): number => {
		const days = this.period.calculateDays();
		const price = days * this.apartmentPrice;
		const discountPrice = this.applyDiscount(price, days);
		return discountPrice;
	};

	private readonly applyDiscount = (price: number, days: number): number => {
		if (days > 20) {
			return Math.floor(price * Record.OVER_20_DAYS_DISCOUNT);
		}

		if (days > 10) {
			return Math.floor(price * Record.OVER_10_DAYS_DISCOUNT);
		}

		return price;
	};
}
