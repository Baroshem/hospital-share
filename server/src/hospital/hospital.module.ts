import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from 'src/user/user.module';
import { HospitalController } from './hospital.controller';
import { HospitalService } from './hospital.service';
import { Hospital } from './hospital.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Hospital]), UserModule],
  providers: [HospitalService],
  controllers: [HospitalController],
})
export class HospitalModule {}
