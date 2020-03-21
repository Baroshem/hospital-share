import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ) {}

  createCompany(createCompanyDto: CreateCompanyDto) {
    return this.companyRepository.save(createCompanyDto);
  }

  async updateCompany(id: string, payload: UpdateCompanyDto) {
    const companyRecord = await this.companyRepository.findOne({ id });

    if(!companyRecord) {
      throw new NotFoundException();
    }

    return this.companyRepository.save({
      ...companyRecord,
      ...payload
    })
  }

  async deleteCompany(id: string) {
    const companyRecord = await this.companyRepository.findOne({ id });

    if(!companyRecord) {
      throw new NotFoundException();
    }

    await this.companyRepository.delete({ id });

    return companyRecord;
  }

}
