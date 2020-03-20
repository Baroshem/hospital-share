import {Injectable} from "@nestjs/common";
import {InjectRepository} from "@nestjs/typeorm";
import {Hospital} from "../core/hospital.typeorm-entity";
import {Repository} from "typeorm";
import {HospitalDto} from "./hospital.dto";

/**
 * Facade encapsulate logic of this module. None go outside: repository, typeorm models etc.
 * DTOs objects can be shared with frontend
 */
@Injectable()
export class HospitalFacade {
    constructor(@InjectRepository(Hospital) private repository: Repository<Hospital>) {
    }

    async findAll(): Promise<HospitalDto[]> {
        return this.repository.find()
            .then(found => found.map(it => new HospitalDto({...it})));
    }


}
