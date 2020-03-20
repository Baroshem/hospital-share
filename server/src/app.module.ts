import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {ConfigModule, ConfigService} from "@nestjs/config";
import {HospitalModule} from './hospital/hospital.module';
import localConfig from 'config/config-local';
import dockerLocalConfig from 'config/config-docker-local';

import {TypeOrmModule} from "@nestjs/typeorm";
import {TimeProviderModule} from './time-provider/time-provider.module';
import { HelpRequestModule } from './help-request/help-request.module';
import { HelpProposalModule } from './help-proposal/help-proposal.module';


const typeOrmModule = TypeOrmModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: (configService: ConfigService) => ({
            type: 'postgres',
            host: configService.get<string>('database.postgres.host'),
            port: configService.get<number>('database.postgres.port'),
            username: configService.get<string>('database.postgres.username'),
            password: configService.get<string>('database.postgres.password'),
            database: configService.get<string>('database.postgres.dbname'),
            entities: [__dirname + '/**/*.typeorm-entity{.ts,.js}'],
            synchronize: true,
        }),
        inject: [ConfigService]
    }
);

const config = process.env.PROFILE == 'docker-local' ? dockerLocalConfig : localConfig;

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config]
        }),
        typeOrmModule,
        HospitalModule,
        TimeProviderModule,
        HelpRequestModule,
        HelpProposalModule,
    ],
    controllers: [AppController],
    providers: [AppService],
    exports: [ConfigModule, TimeProviderModule]
})
export class AppModule {
}
