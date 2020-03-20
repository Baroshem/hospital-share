import {Address} from "../core/address.value-object";
import {AddressDto} from "./address.dto";

export class HospitalDto {
    readonly hospitalId: string;

    readonly name: string;

    readonly address: AddressDto;

    constructor(props: { hospitalId: string, name: string, address: AddressDto }) {
        this.hospitalId = props.hospitalId;
        this.name = props.name;
        this.address = props.address;
    }
}
