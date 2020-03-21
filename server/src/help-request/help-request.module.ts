import { Module } from '@nestjs/common';
import { HelpRequestService } from './help-request.service';
import { HelpRequestController } from './help-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HelpRequest } from './help-request.entity';

@Module({
  imports: [TypeOrmModule.forFeature([HelpRequest])],
  providers: [HelpRequestService],
  controllers: [HelpRequestController],
})
export class HelpRequestModule {}
