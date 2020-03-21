import { Injectable } from '@nestjs/common';
import { HelpRequest } from './help-request.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class HelpRequestService {
  constructor(
    @InjectRepository(HelpRequest)
    private readonly helpRequestRepository: Repository<HelpRequest>,
  ) {}
}
