import { Module } from '@nestjs/common';
import {SequelizeModule} from "@nestjs/sequelize";
import {ConfigModule} from "@nestjs/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FormModule } from './form/form.module';

import {Form} from "./form/form.model";

@Module({
  imports: [
      FormModule,
      ConfigModule.forRoot({
        envFilePath: '.env',
      }),
      SequelizeModule.forRoot({
        dialect: 'postgres',
        host: process.env.POSTGRES_HOST,
        port: Number(process.env.POSTGRES_PORT),
        username: process.env.POSTGRES_USERNAME,
        password: process.env.POSTGRES_PASSWORD,
        database: process.env.POSTGRES_NAME,
        models: [Form],
        autoLoadModels: true
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
