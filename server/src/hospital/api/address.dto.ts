export class AddressDto {
    readonly street: string;
    readonly number: string;
    readonly city: string;
    readonly postalCode: string;

    constructor(props: {street: string, number: string, city: string, postalCode: string}) {
        this.street = props.street;
        this.number = props.number;
        this.city = props.city;
        this.postalCode = props.postalCode;
    }
}
