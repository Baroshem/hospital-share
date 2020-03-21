import { Module } from '@nestjs/common';
import { EquipmentItemService } from './equipment-item.service';
import { EquipmentItemController } from './equipment-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EquipmentItem } from './equipment-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EquipmentItem])],
  providers: [EquipmentItemService],
  controllers: [EquipmentItemController],
})
export class EquipmentItemModule {}
