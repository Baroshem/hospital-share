import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';
import {FastifyAdapter, NestFastifyApplication} from "@nestjs/platform-fastify";
import {ConfigService} from "@nestjs/config";

async function bootstrap() {
    const app = await NestFactory.create<NestFastifyApplication>(
        AppModule,
        new FastifyAdapter({logger: true})
    );
    const configService = app.get(ConfigService);
    await app.listen(configService.get<number>('server.port'));
}

bootstrap();
