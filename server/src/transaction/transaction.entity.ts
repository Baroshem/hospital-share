import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Hospital } from 'src/hospital/hospital.entity';
import { Company } from 'src/company/company.entity';
import { User } from 'src/user/user.entity';
import { EquipmentItem } from 'src/equipment-item/equipment-item.entity';

export enum TransactionStatus {
  OPEN = 'OPEN',
  CONFIRMED = 'CONFIRMED',
  REJECTED = 'REJECTED',
  REALIZED = 'REALIZED',
}

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  deliveryDate: Date;

  @Column({ nullable: true })
  ammount: number;

  @Column({ nullable: true })
  notes: string;

  @Column({
    type: 'enum',
    enum: TransactionStatus,
    default: TransactionStatus.OPEN,
  })
  status: TransactionStatus;

  @ManyToOne(
    () => EquipmentItem,
    equipmentItem => equipmentItem.transactions,
  )
  equipmentItem: EquipmentItem;

  @Column({ nullable: true })
  equimentItemId: string;

  @ManyToOne(
    () => User,
    user => user.transactions,
  )
  user: User;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(
    () => Company,
    company => company.transactions,
  )
  company: Company;

  @Column({ nullable: true })
  companyId: string;

  @ManyToOne(
    () => Hospital,
    hospital => hospital.transactions,
  )
  hospital: Hospital;

  @Column({ nullable: true })
  hospitalId: string;
}
