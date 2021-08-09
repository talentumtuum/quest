import {ApartmentProperties} from '../interfaces';

export class Apartment implements ApartmentProperties {
	public constructor(
		public apartmentId: bigint,
		public price: number,
	) {}
}
