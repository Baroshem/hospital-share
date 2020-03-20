import {Module} from '@nestjs/common';
import {TypeOrmModule} from "@nestjs/typeorm";
import {Hospital} from "./core/hospital.typeorm-entity";
import {HospitalFacade} from "./api/hospital.facade";
import {HospitalController} from "./rest/hospital.controller";

@Module({
    imports: [TypeOrmModule.forFeature([Hospital])],
    controllers: [HospitalController],
    providers: [HospitalFacade],
    exports: [HospitalFacade]
})
export class HospitalModule {
}
