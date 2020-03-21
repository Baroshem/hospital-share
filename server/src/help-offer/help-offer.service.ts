import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpOffer } from './help-offer.entity';

@Injectable()
export class HelpOfferService {
  constructor(
    @InjectRepository(HelpOffer)
    private readonly helpOfferRepository: Repository<HelpOffer>,
  ) {}
}
