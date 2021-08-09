import { Injectable } from '@nestjs/common'
import { Apartment } from '../domain'

@Injectable()
export class ApartmentsMapper {
    public toAggregate(data: any[]): Apartment[]
    public toAggregate(data: any): Apartment
    public toAggregate(data: any): Apartment | Apartment[] {
        return Array.isArray(data)
            ? data.map(this.entityToAggregate)
            : this.entityToAggregate(data);
    }

    private entityToAggregate = (data: any): Apartment => {
        return new Apartment(data.apartmentId, data.price);
    }
}
