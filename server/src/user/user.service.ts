import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from './user.entity';
import * as jwt from 'jsonwebtoken';
import { MailerService } from 'src/mailer/mailer.service';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private configService: ConfigService,
    private mailerService: MailerService,
  ) {}

  findByEmail(email: string) {
    return this.usersRepository.findOne({ email });
  }

  findById(id: string) {
    return this.usersRepository.findOne({ id });
  }

  create(createUserDto: CreateUserDto) {
    return this.usersRepository.save(createUserDto);
  }

  async update(id: string, payload: UpdateUserDto) {
    const userRecord = await this.usersRepository.findOne({ id });

    if (!userRecord) {
      throw new NotFoundException();
    }

    return this.usersRepository.save({
      ...userRecord,
      ...payload,
    });
  }

  async delete(id: string) {
    const userRecord = await this.usersRepository.findOne({ id });

    if (!userRecord) {
      throw new NotFoundException();
    }

    await this.usersRepository.delete({ id });

    return userRecord;
  }

  async createConfirmation(userId: string) {
    const userRecord = await this.findById(userId);

    if(!userRecord) {
      throw new NotFoundException('Company not found')
    }

    const EMAIL_SECRET = this.configService.get('EMAIL_SECRET');
    const token = jwt.sign(userId, EMAIL_SECRET, { expiresIn: '2 days' });

    await this.mailerService.sendConfirmation(token, userRecord.email, 'company');
  }

  async confirmUser(token: string) {
    const EMAIL_SECRET = this.configService.get('EMAIL_SECRET');
    const tokenContent = jwt.verify(token, EMAIL_SECRET);

    if (!tokenContent) {
      return null;
    }

    return true;
  }
}
