import { Controller } from '@nestjs/common';
import { HelpOfferService } from './help-offer.service';

@Controller('help-offer')
export class HelpOfferController {
  constructor(private readonly helpOfferService: HelpOfferService) {}
}
