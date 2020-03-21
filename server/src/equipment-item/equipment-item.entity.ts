import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from 'src/transaction/transaction.entity';
import { HelpOffer } from 'src/help-offer/help-offer.entity';
import { HelpRequest } from 'src/help-request/help-request.entity';

export enum EquipmentItemCategory {
  'CLOTHING' = 'CLOTHING',
  'CLEANING' = 'CLEANING',
  'DEVICES' = 'DEVICES',
  'BEEDING' = 'BEEDING',
  'FOOD' = 'FOOD',
  'COSMETICS' = 'COSMETICS',
  'OTHERS' = 'OTHERS',
}

@Entity()
export class EquipmentItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column({ unique: true })
  nameReg: string;

  @Column({
    type: 'enum',
    enum: EquipmentItemCategory,
  })
  category: EquipmentItemCategory;

  @Column({ default: false })
  custom: boolean;

  @OneToMany(
    () => Transaction,
    transaction => transaction.equipmentItem,
  )
  transactions: Transaction[];

  @OneToMany(
    () => HelpOffer,
    helpOffer => helpOffer.equipmentItem,
  )
  helpOffers: HelpOffer[];

  @OneToMany(
    () => HelpRequest,
    helpRequest => helpRequest.equipmentItem,
  )
  helpRequests: HelpRequest[];
}
