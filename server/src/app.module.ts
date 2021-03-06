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
        DATABASE_URL: Joi.string().required(),
        DATABASE_SYNC: Joi.boolean().required(),
        JWT_SECRET: Joi.string().required(),
        TOKEN_COOKIE_NAME: Joi.string().required(),
        TOKEN_PREFIX: Joi.string().required(),
        SENDGRID_KEY: Joi.string().required(),
        EMAIL_SECRET: Joi.string().required(),
        NPM_CONFIG_PRODUCTION: Joi.string().optional(),
        PROJECT_PATH: Joi.string().optional(),
      }),
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        url: configService.get('DATABASE_URL'),
        synchronize: configService.get('DATABASE_SYNC'),
        ssl: configService.get('NODE_ENV') === 'production',
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
