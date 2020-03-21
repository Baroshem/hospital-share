import { IsUUID, IsNotEmpty } from 'class-validator';

export class CreateHospitalAssignmentDto {
  @IsUUID()
  @IsNotEmpty()
  userId: string;

  @IsUUID()
  @IsNotEmpty()
  hospitalId: string;
}
