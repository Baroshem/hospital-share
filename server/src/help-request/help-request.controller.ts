import { Controller, Post, Body } from '@nestjs/common';
import { HelpRequestService } from './help-request.service';
import { CreateHelpRequestDto } from './dto/create-help-request.dto';

@Controller('help-request')
export class HelpRequestController {
  constructor(private readonly helpRequestService: HelpRequestService) {}

  @Post()
  createHelpRequest(@Body() createHelpRequestDto: CreateHelpRequestDto) {
    return this.helpRequestService.createHelpRequest(createHelpRequestDto);
  }
}
