import {endOfMonth, differenceInDays, startOfMonth} from 'date-fns';

export class Period {
	public from: Date;
	public to: Date;

	public constructor(from: Date, to: Date) {
		this.from = from;
		this.to = to;
	}

	public calculateDays = () => {
		const diffInMs = this.to.getTime() - this.from.getTime();
		const diffInDays = diffInMs / (1000 * 60 * 60 * 24) + 1;
		return diffInDays;
	};

	public calculateDaysByMonths = (): Record<number, number> => {
		const startMonth = this.from.getMonth();
		const endMonth = this.to.getMonth();

		if (startMonth === endMonth) {
			return {
				[startMonth]: this.calculateDays(),
			};
		}

		return {
			[startMonth]: differenceInDays(endOfMonth(this.from), this.from) + 1,
			[endMonth]: differenceInDays(this.to, startOfMonth(this.to)) + 1,
		};
	};
}
