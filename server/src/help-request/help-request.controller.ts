import { Controller, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { HelpRequestService } from './help-request.service';
import { CreateHelpRequestDto } from './dto/create-help-request.dto';
import { UpdateHelpRequestDto } from './dto/update-help-request.dto';

@Controller('help-request')
export class HelpRequestController {
  constructor(private readonly helpRequestService: HelpRequestService) {}

  @Post()
  createHelpRequest(@Body() createHelpRequestDto: CreateHelpRequestDto) {
    return this.helpRequestService.createHelpRequest(createHelpRequestDto);
  }

  @Put('/:id')
  updateHelpRequest(
    @Param('id') id: string,
    @Body() updateHelpRequestDto: UpdateHelpRequestDto ) {
      return this.helpRequestService.updateHelpRequest(id, updateHelpRequestDto);
  }

  @Delete('/:id')
  deleteHelpRequest(@Param('id') id: string) {
    return this.helpRequestService.deleteHelpRequest(id);
  }
}
