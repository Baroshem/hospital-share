import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EquipmentItem } from './equipment-item.entity';
import { CreateEquipmentItemDto } from './dto/create-equipment-item.dto';
import { UpdateEquipmentItemDto } from './dto/update-equipment-item.dto';

@Injectable()
export class EquipmentItemService {
  constructor(
    @InjectRepository(EquipmentItem)
    private readonly equipmentItemRepository: Repository<EquipmentItem>,
  ) {}

  findById(id: string) {
    return this.equipmentItemRepository.findOne({ id });
  }

  create(createEquipmentItemDto: CreateEquipmentItemDto) {
    return this.equipmentItemRepository.save(createEquipmentItemDto);
  }

  getAll() {
    return this.equipmentItemRepository.find();
  }

  async update(id: string, updateEquipmentItemDto: UpdateEquipmentItemDto) {
    const itemRecord = await this.findById(id);

    if (!itemRecord) {
      throw new NotFoundException();
    }

    return this.equipmentItemRepository.save({
      ...itemRecord,
      ...updateEquipmentItemDto,
    });
  }

  async delete(id: string) {
    const itemRecord = await this.findById(id);

    if (!itemRecord) {
      throw new NotFoundException();
    }

    await this.equipmentItemRepository.delete({ id });

    return itemRecord;
  }
}
