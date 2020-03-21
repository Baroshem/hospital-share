import { IsString, IsNotEmpty, IsDate, IsBoolean } from 'class-validator';

export class UpdateHelpRequestDto {
    @IsString()
    @IsNotEmpty()
    equipmentItemId: string;
    
    @IsString()
    @IsNotEmpty()
    hospitalId: string;

    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;
}