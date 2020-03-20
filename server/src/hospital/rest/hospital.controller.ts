import {Controller, Get, Inject} from "@nestjs/common";
import {HospitalFacade} from "../api/hospital.facade";

@Controller()
export class HospitalController {
    constructor(@Inject() private readonly hospitalFacade: HospitalFacade) {}

    @Get()
    getAll() {
        return this.hospitalFacade.findAll();
    }
}
