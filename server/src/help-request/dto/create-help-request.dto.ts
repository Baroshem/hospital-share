import { IsDate, IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreateHelpRequestDto {
    @IsDate()
    @IsNotEmpty()
    createdAt: Date;

    @IsBoolean()
    @IsNotEmpty()
    active: boolean;
    
    @IsString()
    @IsNotEmpty()
    equipmentItemId: string;
    
    @IsString()
    @IsNotEmpty()
    hospitalId: string;
}