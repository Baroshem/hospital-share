import { Controller, Post, Body, Delete, Param, ParseIntPipe, Put, Get } from '@nestjs/common';
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

  @Get()
  getAll() {
    return this.helpOfferService.getAll();
  }

  @Get('/:id')
  getSingle(@Param('id') id: string) {
    return this.helpOfferService.findById(id);
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
