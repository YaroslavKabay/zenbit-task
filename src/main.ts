import { NestFactory } from '@nestjs/core';
import {ValidationPipe} from "@nestjs/common";
import {DocumentBuilder, SwaggerModule} from "@nestjs/swagger";

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes( new ValidationPipe())

  const config = new DocumentBuilder()
      .setTitle('zenbit task')
      .setDescription('The zenbit  API description')
      .setVersion('1.0')
      .addTag('zenbit')
      .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/doc', app, document);

  await app.listen(3001);
}
bootstrap();
