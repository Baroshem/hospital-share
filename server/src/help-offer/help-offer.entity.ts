import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, ManyToOne } from 'typeorm';
import { EquipmentItem } from 'src/equipment-item/equipment-item.entity';
import { User } from 'src/user/user.entity';
import { Company } from 'src/company/company.entity';

@Entity()
export class HelpOffer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ nullable: true })
  amount: number;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;

  @Column()
  active: boolean;

  @Column()
  anonymous: boolean;

  @ManyToOne(
    () => EquipmentItem,
    EquipmentItem => EquipmentItem.helpOffers,
  )
  equipmentItem: EquipmentItem;

  @Column({ nullable: true })
  equipmentItemId: string;

  @ManyToOne(
    () => User,
    user => user.helpOffers,
  )
  user: User;

  @Column({ nullable: true })
  userId: string;

  @ManyToOne(
    () => Company,
    company => company.helpOffes,
  )
  company: Company;

  @Column({ nullable: true })
  companyId: string;
}
