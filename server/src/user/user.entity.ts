import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany } from 'typeorm';
import { Exclude } from 'class-transformer';
import { Company } from 'src/company/company.entity';
import { Hospital } from 'src/hospital/hospital.entity';
import { HelpOffer } from 'src/help-offer/help-offer.entity';
import { Transaction } from 'src/transaction/transaction.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  fullName: string;

  @Column()
  city: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column()
  @Exclude()
  password: string;

  @Column()
  terms: boolean;

  @Column()
  shareContactData: boolean;

  @OneToMany(
    () => HelpOffer,
    helpOffer => helpOffer.user,
  )
  helpOffers: HelpOffer[];

  @ManyToOne(
    () => Company,
    company => company.users,
  )
  company: Company;

  @ManyToOne(
    () => Hospital,
    hospital => hospital.users,
  )
  hospital: Hospital;

  @OneToMany(
    () => Transaction,
    transaction => transaction.user,
  )
  transactions: Transaction[];
}
