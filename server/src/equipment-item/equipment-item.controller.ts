import { Controller } from '@nestjs/common';
import { EquipmentItemService } from './equipment-item.service';

@Controller('equipment-item')
export class EquipmentItemController {
  constructor(private readonly equipmentItemService: EquipmentItemService) {}
}
