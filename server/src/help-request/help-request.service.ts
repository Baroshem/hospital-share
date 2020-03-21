import { Injectable, Post, Body, NotFoundException } from '@nestjs/common';
import { HelpRequest } from './help-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHelpRequestDto } from './dto/create-help-request.dto';
import { UpdateHelpRequestDto } from './dto/update-help-request.dto';

@Injectable()
export class HelpRequestService {
  constructor(
    @InjectRepository(HelpRequest)
    private readonly helpRequestRepository: Repository<HelpRequest>,
  ) {}

  createHelpRequest(createHelpRequestDto: CreateHelpRequestDto) {
    return this.helpRequestRepository.save(createHelpRequestDto);
  }

  async updateHelpRequest(id: string, payload: UpdateHelpRequestDto) {
    const helpRequestRecord = await this.helpRequestRepository.findOne({ id });

    if(!helpRequestRecord) {
      throw new NotFoundException();
    }

    return this.helpRequestRepository.save({
      ...helpRequestRecord,
      ...payload,
    })
  }

  async deleteHelpRequest(id: string) {
    const helpRequestRecord = await this.helpRequestRepository.findOne({ id });

    if(!helpRequestRecord) {
      throw new NotFoundException();
    }

    await this.helpRequestRepository.delete({ id });

    return helpRequestRecord;
  }
}
