import {Column, Entity, PrimaryColumn} from "typeorm";
import {Address} from "./address.value-object";


@Entity()
export class Hospital {
    @PrimaryColumn()
    readonly hospitalId: string;

    @Column()
    readonly name: string;

    @Column({type: 'json'})
    readonly address: Address;

    constructor(hospitalId: string, name: string, address: Address) {
        this.hospitalId = hospitalId;
        this.name = name;
        this.address = address;
    }
}
