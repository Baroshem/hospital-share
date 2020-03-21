import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { HelpOffer } from './help-offer.entity';
import { CreateHelpOfferDto } from './dto/create-help-offer.dto';
import { UpdateHelpOfferDto } from './dto/update-help-offer.dto';

@Injectable()
export class HelpOfferService {
  constructor(
    @InjectRepository(HelpOffer)
    private readonly helpOfferRepository: Repository<HelpOffer>,
  ) {}

  createHelpOffer(createHelpOfferDto: CreateHelpOfferDto) {
    return this.helpOfferRepository.save(createHelpOfferDto)
  }

  async updateHelpOffer(id: string, payload: UpdateHelpOfferDto) {
    const helpRequestRecord = await this.helpOfferRepository.findOne({ id });

    if(!helpRequestRecord) {
      throw new NotFoundException();
    }

    return this.helpOfferRepository.save({
      ...helpRequestRecord,
      ...payload,
    })
  }

  async deleteHelpOffer(id: string) {
    const helpRequestRecord = await this.helpOfferRepository.findOne({ id });

    if(!helpRequestRecord) {
      throw new NotFoundException();
    }

    await this.helpOfferRepository.delete({ id });

    return helpRequestRecord;
  }
}
