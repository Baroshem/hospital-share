import { IsNumber, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';

export class UpdateHelpOfferDto {
    @IsNumber()
    @IsNotEmpty()
    amount: number

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;

    @IsBoolean()
    @IsNotEmpty()
    anonymous: boolean;
}