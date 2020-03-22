import { Response } from 'express';
import { ConfigService } from '@nestjs/config';
import { Controller, Post, Body, Get, Param, Res, Put, Delete } from '@nestjs/common';
import { HospitalService } from './hospital.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { CreateHospitalAssignmentDto } from './dto/create-hospital-assignment.dto';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Controller('hospitals')
export class HospitalController {
  constructor(private hospitalService: HospitalService, private configService: ConfigService) {}

  @Post()
  create(@Body() createHospitalDto: CreateHospitalDto) {
    return this.hospitalService.create(createHospitalDto);
  }

  @Get()
  getAll() {
    return this.hospitalService.getAll();
  }

  @Get('/:id')
  getSingle(@Param('id') id: string) {
    return this.hospitalService.findById(id);
  }

  @Get('/:name/all')
  getAllByName(@Param('name') name: string) {
    return this.hospitalService.findAllByName(name);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateHospitalDto: UpdateHospitalDto) {
    return this.hospitalService.update(id, updateHospitalDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.hospitalService.delete(id);
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
