import { ApiProperty } from '@nestjs/swagger';

export class CreateRecordDto {
    @ApiProperty({
        type: String
    })
    apartmentId: bigint

    @ApiProperty({
        type: String,
        description: 'date'
    })
    from: Date

    @ApiProperty({
        type: String,
        description: 'date'
    })
    to: Date
}
