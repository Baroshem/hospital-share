import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { Controller, Post, Body, Get, Param, Res } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { CreateHospitalAssignmentDto } from './dto/create-hospital-assignment.dto';

@Controller('hospitals')
export class HospitalController {
  constructor(private hospitalService: HospitalService, private configService: ConfigService) {}

  @Post()
  createHospital(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalService.create(createHospitalDto);
  }

  @Post('create-assignment')
  createAssignment(@Body() createHospitalAssignmentDto: CreateHospitalAssignmentDto) {
    return this.hospitalService.createAssignment(createHospitalAssignmentDto);
  }

  @Get('assignment/:token')
  async assignHospital(@Param('token') token: string, @Res() res: Response) {
    await this.hospitalService.assignHospital(token);
    return res.status(200).redirect(`${this.configService.get('CLIENT_URL')}/hospital-assignment-success`);
  }
}
