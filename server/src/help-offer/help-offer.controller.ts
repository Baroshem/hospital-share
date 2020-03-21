import { Controller, Post, Body, Delete, Param, ParseIntPipe, Put } from '@nestjs/common';
import { HelpOfferService } from './help-offer.service';
import { CreateHelpOfferDto } from './dto/create-help-offer.dto';
import { UpdateHelpOfferDto } from './dto/update-help-offer.dto';

@Controller('help-offer')
export class HelpOfferController {
  constructor(private readonly helpOfferService: HelpOfferService) {}

  @Post()
  createHelpOffer(@Body() createHelpOfferDto: CreateHelpOfferDto) {
    return this.helpOfferService.createHelpOffer(createHelpOfferDto);
  }

  @Put('/:id')
  updateHelpOffer(
    @Param('id') id: string,
    @Body() updateHelpOfferDto: UpdateHelpOfferDto) {
      return this.helpOfferService.updateHelpOffer(id, updateHelpOfferDto)
    }


  @Delete('/:id')
  deleteHelpOffer(@Param('id') id: string) {
    return this.helpOfferService.deleteHelpOffer(id);
  }

}
