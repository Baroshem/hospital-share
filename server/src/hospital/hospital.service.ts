import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { Repository } from 'typeorm';
import * as jwt from 'jsonwebtoken';
import { MailerService } from 'src/mailer/mailer.service';
import { UserService } from 'src/user/user.service';
import { CreateHospitalDto } from './dto/create-hospital.dto';
import { CreateHospitalAssignmentDto } from './dto/create-hospital-assignment.dto';
import { Hospital } from './hospital.entity';
import { UpdateHospitalDto } from './dto/update-hospital.dto';

@Injectable()
export class HospitalService {
  constructor(
    @InjectRepository(Hospital)
    private readonly hospitalRepository: Repository<Hospital>,
    private mailerService: MailerService,
    private userService: UserService,
    private configService: ConfigService,
  ) {}

  findById(id: string) {
    return this.hospitalRepository.findOne({ id });
  }

  create(createHospitalDto: CreateHospitalDto) {
    return this.hospitalRepository.save(createHospitalDto);
  }

  getAll() {
    return this.hospitalRepository.find();
  }

  async update(id: string, updateHospitalDto: UpdateHospitalDto) {
    const hospitalRecord = await this.findById(id);

    if (!hospitalRecord) {
      throw new NotFoundException();
    }

    return this.hospitalRepository.save({
      ...hospitalRecord,
      ...updateHospitalDto,
    });
  }

  async delete(id: string) {
    const hospitalRecord = await this.findById(id);

    if (!hospitalRecord) {
      throw new NotFoundException();
    }

    await this.hospitalRepository.delete({ id });

    return hospitalRecord;
  }

  async createAssignment(createHospitalAssignmentDto: CreateHospitalAssignmentDto) {
    const { userId, hospitalId } = createHospitalAssignmentDto;

    const [userRecord, hospitalRecord] = await Promise.all([
      this.userService.findById(userId),
      this.findById(hospitalId),
    ]);

    if (!userRecord) {
      throw new NotFoundException('User not found');
    }

    if (!hospitalRecord) {
      throw new NotFoundException('Hospital not found');
    }

    const EMAIL_SECRET = this.configService.get('EMAIL_SECRET');
    const token = jwt.sign({ userId, hospitalId }, EMAIL_SECRET, { expiresIn: '1d' });

    await this.mailerService.sendHospitalAssignConfirmation(token, hospitalRecord.email);

    return true;
  }

  async assignHospital(token: string) {
    const EMAIL_SECRET = this.configService.get('EMAIL_SECRET');
    const tokenContent = jwt.verify(token, EMAIL_SECRET);

    if (!tokenContent) {
      return null;
    }

    const { userId, hospitalId } = tokenContent as Record<string, string>;

    const hospitalRecord = await this.findById(hospitalId);
    const userRecord = await this.userService.findById(userId);

    await this.hospitalRepository.save({
      ...hospitalRecord,
      users: hospitalRecord.users ? [...hospitalRecord.users, userRecord] : [userRecord],
    });

    return true;
  }
}
