import { Module } from '@nestjs/common';
import { HelpOfferService } from './help-offer.service';
import { HelpOfferController } from './help-offer.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpOffer } from './help-offer.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelpOffer])],
  providers: [HelpOfferService],
  controllers: [HelpOfferController],
})
export class HelpOfferModule {}
