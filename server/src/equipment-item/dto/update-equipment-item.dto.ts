import { IsBoolean, IsOptional, IsEnum, IsString, IsNotEmpty } from 'class-validator';
import { EquipmentItemCategory } from '../equipment-item.entity';

export class UpdateEquipmentItemDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  nameReg: string;

  @IsEnum(EquipmentItemCategory)
  @IsNotEmpty()
  category: EquipmentItemCategory;

  @IsBoolean()
  @IsOptional()
  custom: boolean;
}
