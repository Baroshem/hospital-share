import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import * as jwt from 'jsonwebtoken';
import { Repository } from 'typeorm';
import { Company } from './company.entity';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { MailerService } from 'src/mailer/mailer.service';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
    private configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  findById(id: string) {
    return this.companyRepository.findOne({ id });
  }

  getAll() {
    return this.companyRepository.find();
  }

  async getSingle(id: string) {
    return this.companyRepository.findOne({ id });
  }

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

  async createConfirmation(companyId: string) {
    const companyRecord = await this.findById(companyId);

    if(!companyRecord) {
      throw new NotFoundException('Company not found')
    }

    const EMAIL_SECRET = this.configService.get('EMAIL_SECRET');
    const token = jwt.sign(companyId, EMAIL_SECRET, { expiresIn: '2 days' });

    await this.mailerService.sendConfirmation(token, companyRecord.email, 'company');
  }

  async confirmCompany(token: string) {
    const EMAIL_SECRET = this.configService.get('EMAIL_SECRET');
    const tokenContent = jwt.verify(token, EMAIL_SECRET);

    if (!tokenContent) {
      return null;
    }

    return true;
  }

}
