import { Controller, Body, Post, Param, Delete, Put, Get } from '@nestjs/common';
import { EquipmentItemService } from './equipment-item.service';
import { CreateEquipmentItemDto } from './dto/create-equipment-item.dto';
import { UpdateEquipmentItemDto } from './dto/update-equipment-item.dto';

@Controller('equipment')
export class EquipmentItemController {
  constructor(private readonly equipmentItemService: EquipmentItemService) {}

  @Post()
  create(@Body() createEquipmentItemDto: CreateEquipmentItemDto) {
    return this.equipmentItemService.create(createEquipmentItemDto);
  }

  @Get()
  getAll() {
    return this.equipmentItemService.getAll();
  }

  @Get('/:id')
  getSingle(@Param('id') id: string) {
    return this.equipmentItemService.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() updateEquipmentItemDto: UpdateEquipmentItemDto) {
    return this.equipmentItemService.update(id, updateEquipmentItemDto);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.equipmentItemService.delete(id);
  }
}
