import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { User } from 'src/user/user.entity';
import { HelpRequest } from 'src/help-request/help-request.entity';
import { Transaction } from 'src/transaction/transaction.entity';

@Entity()
export class Hospital {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  city: string;

  @Column()
  address: string;

  @Column({ nullable: true })
  website: string;

  @Column()
  phone: string;

  @Column({ unique: true })
  email: string;

  @Column({ default: false })
  isolation: boolean;

  @OneToMany(
    () => User,
    user => user.hospital,
  )
  users: User[];

  @OneToMany(
    () => HelpRequest,
    helpRequest => helpRequest.hospital,
  )
  helpRequests: HelpRequest[];

  @OneToMany(
    () => Transaction,
    transaction => transaction.hospital,
  )
  transactions: Transaction[];
}
