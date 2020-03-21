import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { EquipmentItem } from 'src/equipment-item/equipment-item.entity';
import { Hospital } from 'src/hospital/hospital.entity';

@Entity()
export class HelpRequest {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column()
  active: boolean;

  @ManyToOne(
    () => EquipmentItem,
    equipmentItem => equipmentItem.helpRequests,
  )
  equipmentItem: EquipmentItem;

  @ManyToOne(
    () => Hospital,
    hospital => hospital.helpRequests,
  )
  createdBy: Hospital;
}
