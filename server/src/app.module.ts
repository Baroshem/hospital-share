import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import * as Joi from '@hapi/joi';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { HospitalModule } from './hospital/hospital.module';
import { AuthModule } from './auth/auth.module';
import { CompanyModule } from './company/company.module';
import { EquipmentItemModule } from './equipment-item/equipment-item.module';
import { TransactionModule } from './transaction/transaction.module';
import { HelpOfferModule } from './help-offer/help-offer.module';
import { HelpRequestModule } from './help-request/help-request.module';
import { MailerModule } from './mailer/mailer.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validationSchema: Joi.object({
        NODE_ENV: Joi.string()
          .valid('development', 'test', 'production')
          .default('development'),
        PORT: Joi.number().required(),
        SERVER_URL: Joi.string().required(),
        CLIENT_URL: Joi.string().required(),
        DB_HOST: Joi.string().required(),
        DB_PORT: Joi.number().required(),
        DB_NAME: Joi.string().required(),
        DB_USER: Joi.string().required(),
        DB_PASSWORD: Joi.string().required(),
        JWT_SECRET: Joi.string().required(),
        TOKEN_COOKIE_NAME: Joi.string().required(),
        TOKEN_PREFIX: Joi.string().required(),
        SENDGRID_KEY: Joi.string().required(),
        EMAIL_SECRET: Joi.string().required(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST'),
        port: configService.get('DB_PORT'),
        username: configService.get('DB_USER'),
        password: configService.get('DB_PASSWORD'),
        database: configService.get('DB_NAME'),
        synchronize: configService.get('NODE_ENV') === 'development',
        autoLoadEntities: true,
      }),
    }),
    UserModule,
    HospitalModule,
    AuthModule,
    CompanyModule,
    EquipmentItemModule,
    TransactionModule,
    HelpOfferModule,
    HelpRequestModule,
    MailerModule,
  ],
})
export class AppModule {}
