import { Response } from 'express';
import { Controller, Body, Post, Put, Param, Delete, Get, Res } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('company')
export class CompanyController {
  constructor(private readonly companyService: CompanyService, private configService: ConfigService) {}

  @Get()
  getAll() {
    return this.companyService.getAll();
  }

  @Get('/:id')
  getSingle(@Param('id') id: string) {
    return this.companyService.getSingle(id);
  }

  @Get('/:name/all')
  getAllByName(@Param('name') name: string) {
    return this.companyService.findAllByName(name);
  }

  @Post()
  createCompany(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.createCompany(createCompanyDto);
  }

  @Put('/:id')
  updateCompany(
    @Param('id') id: string,
    @Body() updateCompanyDto: UpdateCompanyDto) {
      return this.companyService.updateCompany(id, updateCompanyDto);
  }

  @Delete('/:id')
  deleteCompany(@Param('id') id: string) {
    return this.companyService.deleteCompany(id);
  }

  @Post('create-confirmation')
  createConfirmation(@Body() id: string) {
    return this.companyService.createConfirmation(id);
  }

  @Get('confirm/:token')
  async confirmCompany(@Param('token') token: string, @Res() res: Response) {
    await this.companyService.confirmCompany(token);
    return res.status(200).redirect(`${this.configService.get('CLIENT_URL')}/confirmation-success`)
  }
}
