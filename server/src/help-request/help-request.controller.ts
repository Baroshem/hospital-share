import { Controller } from '@nestjs/common';
import { HelpRequestService } from './help-request.service';

@Controller('help-request')
export class HelpRequestController {
  constructor(private readonly helpRequestService: HelpRequestService) {}
}
