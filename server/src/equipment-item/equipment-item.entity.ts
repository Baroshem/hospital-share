import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Transaction } from 'src/transaction/transaction.entity';
import { HelpOffer } from 'src/help-offer/help-offer.entity';
import { HelpRequest } from 'src/help-request/help-request.entity';

@Entity()
export class EquipmentItem {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

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
