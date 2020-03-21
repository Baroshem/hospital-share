import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity';
import { HelpOffer } from 'src/help-offer/help-offer.entity';
import { Transaction } from 'src/transaction/transaction.entity';

@Entity()
export class Company {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  city: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true })
  website: string;

  @OneToMany(
    () => User,
    user => user.company,
  )
  users: User[];

  @OneToMany(
    () => HelpOffer,
    helpOffer => helpOffer.company,
  )
  helpOffes: HelpOffer[];

  @OneToMany(
    () => Transaction,
    transaction => transaction.company,
  )
  transactions: Transaction[];
}
