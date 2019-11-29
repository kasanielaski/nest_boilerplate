import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import proxy from 'express-http-proxy';

async function bootstrap(): Promise<void> {
    const app = await NestFactory.create(AppModule);
    app.use('/', proxy('www.google.com'));
    await app.listen(3000);
}
bootstrap();
