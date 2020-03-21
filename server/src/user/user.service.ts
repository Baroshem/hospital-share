import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
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
}
